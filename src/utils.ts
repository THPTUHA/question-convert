import { BASE_IMG_QUESTION_URL, ITEM_TYPE } from "./constants";
import { Group, Item } from "./types";
//#_ _#
const getContentWrap = (str: string) => {
  if (str.includes('(#_')) {
    return str.slice(3, str.length - 3);
  }

  if (str.includes('#_')) {
    return str.slice(2, str.length - 2);
  }
  return str;
};

const handleText = (str: string, result: Item[]) => {
  // console.log(str,'str----322')
  // const arr = str.replace(/\n/g, '#\n#').split('#').filter(item => item);
  // for(const c of arr){
  //     if(c == '\n'){
  //         result.push({
  //             type: ITEM_TYPE.BREAKLINE,
  //             data: c
  //         })
  //     }else{
  //         result.push({
  //             type: ITEM_TYPE.TEXT,
  //             data: c
  //         })
  //     }
  // }
  // const data = str.replace(/\n/g, '</br>');
  const data = str;
  if (data) {
    result.push({
      type: ITEM_TYPE.TEXT,
      data: data,
    });
  }
};

const splitInput = (str: string, result: Item[]) => {
  // if (str.includes(')-_#')) {
  //   // #_(#_(abab) - _#) / (#_(cdcd) - _#)_#
  //   let item = str.split(')-_#')[0];
  //   if (!item) {
  //     return false;
  //   }
  //   let eles = item.split('#_(');
  //   let content = eles.splice(-1)[0];
  //   if (!content) {
  //     return false;
  //   }
  //   return eles.join('#_(') + content;
  // }

  if (str[str.length - 1] !== '#') {
    return false;
  }

  let idx = str.indexOf('#_');
  let str_next = str.slice(idx, str.length);
  let inner = str_next.slice(2, str_next.length - 2);

  // console.log("GR", str, inner);
  if (inner.includes('Group:')) {
    const SPLIT = 'Group:';
    let raw = inner.slice(SPLIT.length, inner.length).split(';');
    // console.log('RAW: ', raw);
    let data: Group = {};
    for (const item of raw) {
      if (item.includes('#')) {
        let split_num = item.match(/#/g)?.length;
        if (split_num && split_num % 2) {
          return false;
        }
        const element = item.split('#');

        // #_Group:1_#_Q_CB_TV_1_1_BDTV001_32_1.png_#;2_#_Q_CB_TV_1_1_BDTV001_32_2.png_#_#
        //  Ko có lable

        // Group:1_#_Q_NC_TA_1_1_6_1.mp3_#_Toys;2_#_Q_NC_TA_1_1_6_2.mp3_#_Feelings;3_#_Q_NC_TA_1_1_6_3.mp3_#_Body parts"
        // Có label
        if (element.length > 3) {
          return false;
        }
        const key = element[0].split('_')[0];
        if (!key) {
          return false;
        }
        data[key] = [];
        if (element[1].includes('.mp3')) {
          data[key].push({
            type: ITEM_TYPE.AUDIO,
            data: `${BASE_IMG_QUESTION_URL}/${element[1].slice(1, -1)}`,
          });
        } else if (element[1].includes('.png') || element[1].includes('jpg')) {
          data[key].push({
            type: ITEM_TYPE.IMG,
            data: `${BASE_IMG_QUESTION_URL}/${element[1].slice(1, -1)}`,
          });
        }

        if (element[2]) {
          const text = element[2].slice(1, element[2].length);
          if (text) {
            data[key].push({
              type: ITEM_TYPE.TEXT,
              data: text,
            });
          }
        }
      } else {
        // Group:1_abc;2_efg;3_mnp
        const elements = item.split('_').filter(e => e);
        const key = elements.splice(0, 1)[0];
        if (!elements.length) {
          return false;
        }
        data[key] = [
          {
            type: ITEM_TYPE.TEXT,
            data: elements.join('_'),
          },
        ];
      }
    }

    let str_pre = str.slice(0, idx);
    if (str_pre) {
      handleText(str_pre, result);
    }

    result.push({
      type: ITEM_TYPE.GROUP,
      data: data,
    });

    return true;
  }

  let open = str.match(/#_/g)?.length;
  let close = str.match(/_#/g)?.length;

  if (open != close) {
    return false;
  }

  let str_pre = str.slice(0, idx);
  if (str_pre) {
    handleText(str_pre, result);
  }

  if (inner == '[]') {
    result.push({
      type: ITEM_TYPE.INPUT,
      data: '',
    });
    return true;
  }

  if (inner.includes('DR:')) {
    result.push({
      type: ITEM_TYPE.DROP_LIST,
      data: inner
        .slice(3, inner.length)
        .split(';')
        .map(item => item.trim()),
    });
    return true;
  }

  if (inner.includes('.png') || inner.includes('.jpg')) {
    result.push({
      type: ITEM_TYPE.IMG,
      data: `${BASE_IMG_QUESTION_URL}/${inner}`,
    });
    return true;
  }

  if (inner.includes('/')) {
    const comp = inner.split('/');

    const data = [];
    if (comp.length > 2) {
      return console.log('err');
    }
    for (let i = 0; i < comp.length; ++i) {
      if (comp[i].split(':')?.length > 1) {
      } else {
        comp[i] = getContentWrap(comp[i]);
      }
    }

    // [] []/[]  or []/[]
    // (#_(abab)-_#) / (#_(cdcd)-_#)
    const numerator = comp[0];
    if (numerator) {
      let items;
      //dat them xử lý phép toán ở tử số và mẫu số của dạng phân số
      if (numerator.includes('[]')) {
        items = numerator.split(' ');
      } else {
        if (numerator.includes('(') && numerator.includes(')')) {
          items = numerator.split('/ (?![^[]*])/');
        } else {
          items = numerator.split(' ');
        }
      }

      let pre = '';
      for (let item of items) {
        if (item == '[]') {
          if (pre) {
            data.push(pre);
          }
          data.push('[]');
          pre = '';
        } else if (numerator.includes(')-')) {
          pre += item;
        } else {
          data.push(item);
        }
      }
      if (pre) {
        data.push(pre);
      }
    }
    data.push(comp[1]);
    result.push({
      type: ITEM_TYPE.FRACTION,
      data,
    });
    return true;
  }

  if (inner.includes('.mp3')) {
    result.push({
      type: ITEM_TYPE.AUDIO,
      data: `${BASE_IMG_QUESTION_URL}/${inner}`,
    });

    return true;
  }

  if (inner.includes('KT')) {
    if (inner.includes('KT[')) {
      //nếu có chứa number
      let regexGetNum = /\d+/g;
      let numValue: any = inner.match(regexGetNum);
      numValue = parseInt(numValue);
      while (numValue--) {
        result.push({
          type: ITEM_TYPE.DROP_ANSWER,
          data: [''],
        });
        if (numValue === 0) {
          break;
        }
      }
    } else {
      //nếu không chưa number
      const SPLIT = 'KT:';
      let inner_slice: any = inner
        .slice(SPLIT.length, inner.length)
        .split(';')
        .map(item => item.trim());
      if (typeof inner_slice === 'object') {
        randomArray(inner_slice);
      }
      result.push({
        type: ITEM_TYPE.DROP_ANSWER,
        data: inner_slice,
      });
    }
    return true;
  }

  if (inner.includes('[...]')) {
    result.push({
      type: ITEM_TYPE.WORD,
      data: '',
    });
    return true;
  }

  if (inner.includes('TD:')) {
    const SPLIT = 'TD:';
    result.push({
      type: ITEM_TYPE.READ_TD,
      data: inner.slice(SPLIT.length, inner.length),
    });
  }

  if (inner.includes('ND_1:') || inner.includes('ND_2:')) {
    let SPLIT = 'ND_1:' || 'ND_2:';
    let content_ND: any = [];
    inner
      .slice(SPLIT.length, inner.length)
      .split('\n')
      .map(item => {
        content_ND.push({
          type: ITEM_TYPE.TEXT,
          data: item,
        });
        content_ND.push({
          type: ITEM_TYPE.TEXT,
          data: '\n',
        });
      });
    result.push({
      type: ITEM_TYPE.READ_ND,
      data: content_ND,
    });
    return true;
  }

  if (inner.includes('ND:')) {
    let SPLIT = 'ND:';
    let content_ND: any = [];
    inner
      .slice(SPLIT.length, inner.length)
      .split('\n')
      .map(item => {
        content_ND.push({
          type: ITEM_TYPE.TEXT,
          data: item,
        });
        content_ND.push({
          type: ITEM_TYPE.TEXT,
          data: '\n',
        });
      });
    result.push({
      type: ITEM_TYPE.READ_ND,
      data: content_ND,
    });

    return true;
  }

  if (inner.includes('TG:')) {
    const SPLIT = 'TG:';
    result.push({
      type: ITEM_TYPE.READ_TG,
      data: inner.slice(SPLIT.length, inner.length).trim(),
    });

    return true;
  }

  if (inner) {
    result.push({
      type: ITEM_TYPE.TEXT,
      data: inner,
    });
  }
  return true;
};

const splitAnswer = (str: string, result: Item[]) => {
  // let tmpMathjax: any = str.match(regexGetContentMathJax);
  // if (tmpMathjax) {
  //   inputMathjax(str, result);
  // } else {

  // }
  let tmp = str.split('&');
  for (const item of tmp) {
    result.push({
      type: ITEM_TYPE.ANSWER,
      data: item,
    });
  }
};

export const splitStringBySpecialCharacter = (
  str: string,
  is_answer?: boolean,
) => {
  const result: Item[] = [];
  if (is_answer) {
    splitAnswer(str, result);
  } else {
    let str_tmp = '';
    for (let i = 0; i < str.length; ++i) {
      str_tmp += str[i];
      if (str_tmp.includes('_#')) {
        let is_split = splitInput(str_tmp, result);
        if (is_split) {
          str_tmp = '';
        }
      }
    }
    if (str_tmp) {
      handleText(str_tmp, result);
    }
  }

  return result;
};

export const randomArray = (arr: any[]) => {
  for (let i = arr.length - 1; i >= 1; --i) {
    let idx = Math.floor(Math.random() * i);
    let temp = arr[i];
    arr[i] = arr[idx];
    arr[idx] = temp;
  }
};

export const generateKeyMap = (args: any[]) => {
    return args.join("#");
}