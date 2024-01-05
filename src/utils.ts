import { BASE_IMG_QUESTION_URL, ITEM_TYPE } from "./constants";
import { Group, Item } from "./types";
import {regexCheckInput, regexCheckRenderInteger, regexCheckSymbolMath} from './regexExpression';

const specialText = (t: string)=>{
  if(t==='(...)'){
    return {
      type: ITEM_TYPE.DIVISIBLE_SIGN,
      data: '(...)',
    }
  }

  return {
    type: ITEM_TYPE.TEXT,
    data: t,
  }
}
//#_ _#
// const getContentWrap = (str: string) => {
//   if (str.includes("#_[]_#")){
//     return str
//   }
//   if (str.startsWith('(#_')) {
//     return str.slice(3, str.length - 3);
//   }

//   if (str.startsWith('#_')) {
//     return str.slice(2, str.length - 2);
//   }
//   return str;
// };

function replaceNewLines(input:string) {
  let isSpecialString = false; // Biến cờ để xác định xem chúng ta đang ở trong chuỗi đặc biệt

  // Tách chuỗi thành từng ký tự
  const characters = input.split('');

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === '$' && characters[i + 1] === '$') {
      // Bắt đầu hoặc kết thúc chuỗi đặc biệt
      isSpecialString = !isSpecialString;
      i++; // Bỏ qua ký tự thứ hai của "$$"
    } else if (characters[i] === '\n' && !isSpecialString ) {
      // Thay thế '\n' bằng `</br>`
      characters[i] = '</br>';
    }
  }

  // Kết hợp các ký tự thành chuỗi kết quả
  return characters.join('');
}

// function standardizeMathjax(input: string){
//   const regexFrac = /(?<!\\)\\frac/g
//   if(input.match(regexFrac)){
//     input = input.replace(regexFrac, '\frac')
//   }

//   const regexLeft = /(?<!\\)\\left/g
//   if(input.match(regexLeft)){
//     input = input.replace(regexLeft,"----left")
//     const items = input.split("----left")
//     let a =items[0]
//     for(let i=1; i< items.length; i++){
//       a += `\left`+items[i]
//     }
//     input = a
//   }

//   const regexRight= /(?<!\\)\\right/g
//   if(input.match(regexRight)){
//     input = input.replace(regexRight, '\right')
//   }

//   const regexBegin= /(?<!\\)\\begin/g
//   if(input.match(regexBegin)){
//     input = input.replace(regexBegin, `\begin`)
//   }

//   const regexBracket= /(?<!\\)\\{/g
//   if(input.match(regexBracket)){
//     input = input.replace(regexBracket, `\{`)
//   }

//   const regexEnd= /(?<!\\)\\end/g
//   if(input.match(regexEnd)){
//     input = input.replace(regexEnd, `\end`)
//   }

//   const regexLeftrightarrow= /(?<!\\)\\Leftrightarrow/g
//   if(input.match(regexLeftrightarrow)){
//     input = input.replace(regexLeftrightarrow, '\Leftrightarrow')
//   }
//   return  input;
// }

const handleText = (str: string, result: Item[]) => {
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
 
  let data = replaceNewLines(str);
  if (data) {
    // data = standardizeMathjax(data) 
    var imgRegex = /<img[^>]*\/>/;
    var images = data.match(imgRegex);
    if(images){
      let index = 0
      const arrs = data.split(imgRegex);
      for(let i = 0; i < arrs.length ; ++i){
        if(arrs[i] == "" || i > 0){
          var img = images[index]
          if(img){
            var match = img.match( /<img[^>]*src="([^"]*)"[^>]*>/)
            if(match){
              var img_src = match[1];
              result.push({
                type: ITEM_TYPE.IMG,
                data: img_src,
              });
            }
          }
        }

        if(arrs[i]){
          result.push(specialText(arrs[i]));
        }
      }
    }else{
      result.push(specialText(data));
    }
  }
};


const splitInput = (str: string, result: Item[]) => {
  // if (str.includes(')-_#')) {z
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
            data[key].push(specialText(text));
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
          specialText(elements.join('_')),
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

    // for (let i = 0; i < comp.length; ++i) {
    //   if (comp[i].split(':')?.length > 1) {
    //   } else {
    //     comp[i] = getContentWrap(comp[i]);
    //   }
    // }

    // [] []/[]  or []/[]
    // (#_(abab)-_#) / (#_(cdcd)-_#)
    // '(2 × #_[]_#)/(5 × #_[]_#)'
    const numerator = comp[0];
    var hasNumber = /\d/;
    
    if (numerator) {
      // let items;
      // //dat them xử lý phép toán ở tử số và mẫu số của dạng phân số
      // if (numerator.includes('[]') && !hasNumber.test(numerator)) {
      //   items = numerator.split(' ');
      // } else {
      //   if (numerator.includes('(') && numerator.includes(')')) {
      //     items = numerator.split('/ (?![^[]*])/');
      //     items = items.map(el => {
      //       if (el && el[0] === '(' && el[el.length - 1] === ')') {
      //         return el?.replace(/[(]/g, '')?.replace(/[)]/g, '');
      //       } else {
      //         return el;
      //       }
      //     });
      //   } else {
      //     items = numerator.split(' ');
      //   }
      // }

      let tmpRegexCheckRenderInterger = new RegExp(
        regexCheckRenderInteger,
      ).test(numerator);
      let tmpRegexCheckInput = new RegExp(regexCheckInput).test(numerator);
      let tmpRegexHasNumber = new RegExp(hasNumber).test(numerator);
      let tmpRegexHasSymbolMath = new RegExp(regexCheckSymbolMath).test(numerator);

      let items;
      if (tmpRegexCheckRenderInterger) {
        //Nếu biểu thức có chứa số nguyên
        if (tmpRegexCheckInput) {
          //Nếu biểu thức có chứ input
          items = [numerator.replace(regexCheckInput, '[]')];
        } else if (tmpRegexHasNumber) {
          //Nếu biểu thức có chứa số
          items = [numerator];
        } else {
          items = [numerator];
        }
      } else if (tmpRegexCheckInput) {
        //Nếu biểu thức có chứ input
        if (tmpRegexHasNumber) {
          //Nếu biểu thức có chứa số
          items = [numerator.replace(regexCheckInput, '[]')];
        } else {
          //check nếu là hỗn số
          let tmpSplitNumerator = numerator.split(' ');
          if (tmpSplitNumerator.length > 2) {
            items = [numerator.replace(regexCheckInput, '[]')];
          } else {
            if (tmpRegexCheckInput) {
              //Nếu là dạng input
              items = [numerator.replace(regexCheckInput, '[]')];
            } else {
              items = numerator.split(' ');
            }
          }
        }
      } else if (tmpRegexHasNumber) {
        //check nếu là hỗn số
        let tmpSplitNumerator = numerator.split(' ');
        if (tmpSplitNumerator.length > 2) {
          items = [numerator];
        } else {
          items = numerator.split(' ');
        }
      } else if(tmpRegexHasSymbolMath) {
        items = [numerator];
      } else {
        items = numerator.split(' ');
      }

      // let pre = '';
      // for (let item of items) {
      //   if (item == '[]') {
      //     if (pre) {
      //       data.push(pre);
      //     }
      //     data.push('[]');
      //     pre = '';
      //   } else if (numerator.includes(')-')) {
      //     pre += item;
      //   } else {
      //     data.push(item);
      //   }
      // }
      // if (pre) {
      //   data.push(pre);
      // }

      let pre = '';
      for (let item of items) {
        if (item == '[]') {
          if (pre) {
            data.push(pre);
          }
          data.push('[]');
          pre = '';
        } else {
          data.push(item);
        }
      }
      if (pre) {
        data.push(pre);
      }
    }

    let numerator1 = comp[1];
    data.push(numerator1.replace(regexCheckInput, '[]'));

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
      //dat rào sửa lỗi random đáp án của dạng TA_007
      // if (typeof inner_slice === 'object') {
      //   randomArray(inner_slice);
      // }
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
        content_ND.push(specialText(item));
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
      .map((item:string) => {
        content_ND.push(specialText(item));
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
    result.push(specialText(inner));
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
      data: item.trim(),
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