import { ITEM_TYPE, QUESTION_TYPE, S_ANSWER_CORRECT, S_ANSWER_WRONG, S_UNANSWER } from "./constants";
import { regexCheckRenderInput } from "./regexExpression";
import { QuestionRender, RawQuestion, Solution } from "./types";
import { generateKeyMap, randomArray, splitStringBySpecialCharacter } from "./utils";

export const hanldeQuestion = (questions: RawQuestion[]) => {
    const question_render: QuestionRender[] = [];
    for (const [index, question] of questions.entries()) {
        let content = question.content;
        if (content) {
            const question_type = question.content?.kieu_cau_hoi;
            const title = splitStringBySpecialCharacter(content.noi_dung_cau_hoi.noi_dung);
            const explain = content.giai_thich_dap_an.noi_dung ? splitStringBySpecialCharacter(content.giai_thich_dap_an.noi_dung) : [];

            let answers = content.ds_cau_tra_loi.map((item, index) => {
                let _content = splitStringBySpecialCharacter(item.noi_dung_cau_tra_loi.noi_dung);
                if (content && [QUESTION_TYPE.TV_009, QUESTION_TYPE.TA_009].includes(content.kieu_cau_hoi)) {
                    return {
                        id: item.id_cau_tra_loi,
                        content: _content,
                        pos: index,
                        label: 'main'
                    }
                }

                // Dạng nối
                if (content && [
                    QUESTION_TYPE.TV_005, QUESTION_TYPE.TA_005,
                    QUESTION_TYPE.TV_006, QUESTION_TYPE.TA_006
                ].includes(content.kieu_cau_hoi)) {
                    if (_content[0] && typeof _content[0].data === 'string') {
                        let eles = _content[0].data.split("_");
                        // _content[0].data = eles[1]
                        let formatContent = _content[0].data.substring(
                            _content[0].data.indexOf('_') + 1,
                          );
                          _content[0].data = formatContent;
                        return {
                            id: item.id_cau_tra_loi,
                            content: _content,
                            pos: index,
                            label: eles[0]
                        }
                    }
                }
                return {
                    id: item.id_cau_tra_loi,
                    content: _content,
                    pos: index,
                }
            });

            // Random thứ tự đáp án
            if (question.random && question_type && [
                QUESTION_TYPE.CH_005, 
                QUESTION_TYPE.TA_008, 
                QUESTION_TYPE.TV_008,
                QUESTION_TYPE.TA_014,
                QUESTION_TYPE.TA_009,
                QUESTION_TYPE.TV_009,
                QUESTION_TYPE.TA_004,
                QUESTION_TYPE.TV_004,
                QUESTION_TYPE.CH_004,
                QUESTION_TYPE.CH_011,
                QUESTION_TYPE.TV_013,
                QUESTION_TYPE.TA_013,
            ].includes(question_type)) {
                randomArray(answers)
            }

            if (question.random && question_type && [
                QUESTION_TYPE.CH_007,
            ].includes(question_type)){
                const top = answers.slice(0, Math.floor( answers.length/ 2))
                const bottom = answers.slice( Math.floor( answers.length/ 2 ),answers.length)
                randomArray(top)
                randomArray(bottom)
                answers =  [...top, ...bottom]
            }
            // "answer_index#input_index"
            let solutions: Solution = {}
            let answer_pupil: Solution = {}

            if ([QUESTION_TYPE.TV_009, QUESTION_TYPE.TA_009].includes(content.kieu_cau_hoi)) {

                const group = title.filter(item => item.type === ITEM_TYPE.GROUP)[0];
                if (group && typeof group.data === 'object' && !Array.isArray(group.data)) {
                    for (const dap_an of content.dap_an) {
                        const result = dap_an.noi_dung_dap_an.split("_");
                        if (result.length === 2) {
                            solutions[result[0]] = result[1].split("&").sort((a, b) => a > b ? 1 : -1).join('#');
                            answer_pupil[result[0]] = ''
                        }
                    }
                }

            } else if (question_type === QUESTION_TYPE.CH_008) {
                solutions.content = answers.reduce((pre, item) => { return pre += '#' + item.id + '#' }, '')
                randomArray(answers)
                answers.map((item, index) => {
                    item.pos = index
                })
            } else if ([
                QUESTION_TYPE.CH_007,
                QUESTION_TYPE.TV_005, QUESTION_TYPE.TA_005,
                QUESTION_TYPE.TV_006, QUESTION_TYPE.TA_006,
            ].includes(content.kieu_cau_hoi)) {
                content.dap_an.map((item) => {
                    solutions[item.noi_dung_dap_an.split("_").sort((a, b) => a > b ? 1 : -1).join("_")] = 'true';
                })
            }
            else if (content.kieu_cau_hoi === QUESTION_TYPE.TA_014 ||
                content.kieu_cau_hoi === QUESTION_TYPE.TV_014) {
                // 1 answer tương ứng với 1 đáp án
                for (const [a_index, answer] of answers.entries()) {
                    // Đáp án nguyên bản của câu hỏi 
                    for (const solution of content.dap_an) {
                        // Lấy ra đáp án tương ứng với answer
                        if (solution.id_cau_tra_loi == answer.id) {
                            const items = splitStringBySpecialCharacter(solution.noi_dung_dap_an, true);
                            const content = answer.content;
                            let a = 0; //key dap_an
                            let i = 0;// Vị trí input, hoặc select trong  content
                            for (const [_, s_item] of items.entries()) {
                                for (; i < content.length; ++i) {
                                    const input = content[i];
                                    const key = generateKeyMap([a_index, i]);
                                    if (input.type == ITEM_TYPE.DROP_ANSWER && typeof s_item.data == 'string') {
                                        solutions[key] = s_item.data + '_' + a;
                                        answer_pupil[key] = '';
                                        i++;
                                        a++;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (
                content.kieu_cau_hoi === QUESTION_TYPE.TV_008 ||
                content.kieu_cau_hoi === QUESTION_TYPE.TA_008) {
                const dropList = title.filter(item => item.type === ITEM_TYPE.DROP_ANSWER);
                let formatAnswers = [
                    {
                        id: 'A',
                        content: dropList || [],
                        pos: 0
                    }
                ];
                //add break line </br>
                formatAnswers[0].content.push({ type: ITEM_TYPE.TEXT, data: '</br>' });
                //khoi tao data cau tra loi
                let ansList = [];
                for (const [a_index, answer] of answers.entries()) {
                    let structureAns = (a_index + 1) + '_' + answer.content[0].data;
                    ansList.push(structureAns);
                    for (const [i_index, solution] of content.dap_an.entries()) {
                        if (solution.id_cau_tra_loi === answer.id) {
                            solutions[`${0}#${i_index}`] = (a_index + 1).toString();
                            answer_pupil[`${0}#${i_index}`] = '';
                        }
                    }
                }
                formatAnswers[0].content.push({ type: ITEM_TYPE.DROP_ANSWER, data: ansList });
                answers = [...formatAnswers];
            } else if (content.kieu_cau_hoi === QUESTION_TYPE.TV_007 ||
                content.kieu_cau_hoi === QUESTION_TYPE.TA_007) {
                // 1 answer tương ứng với 1 đáp án
                for (const [a_index, answer] of answers.entries()) {
                    // Đáp án nguyên bản của câu hỏi 
                    for (const solution of content.dap_an) {
                        // Lấy ra đáp án tương ứng với answer
                        if (solution.id_cau_tra_loi == answer.id) {
                            // Đáp án nguyên bản sau khi cắt thành mảng xx&yy&zz => [xx,yy,zz]
                            const items = splitStringBySpecialCharacter(solution.noi_dung_dap_an, true);
                            const content = answer.content;
                            let i = 0;// Vị trí input, hoặc select trong  content
                            for (let j = 0; j < items.length; ++j) {
                                const s_item = items[j];
                                for (; i < content.length; ++i) {
                                    const input = content[i];
                                    if (input.type != ITEM_TYPE.TEXT &&
                                        input.type != ITEM_TYPE.IMG &&
                                        typeof s_item.data == 'string') {
                                        if (input.type != ITEM_TYPE.AUDIO) {
                                            // Đáp án biến đổi lại
                                            solutions[`${a_index}#${i}`] = s_item.data + '_' + a_index;
                                            answer_pupil[`${a_index}#${i}`] = '';
                                            i++;
                                            break;
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                // 1 answer tương ứng với 1 đáp án
                for (const [a_index, answer] of answers.entries()) {
                    // Đáp án nguyên bản của câu hỏi 
                    for (const solution of content.dap_an) {
                        // Lấy ra đáp án tương ứng với answer
                        if (solution.id_cau_tra_loi == answer.id) {

                            // Dạng lựa chọn đáp án
                            if (question_type && [
                                QUESTION_TYPE.CH_006, QUESTION_TYPE.TV_004, QUESTION_TYPE.TA_004,
                                QUESTION_TYPE.CH_010, QUESTION_TYPE.CH_005,
                                QUESTION_TYPE.TV_013, QUESTION_TYPE.TA_013,
                                QUESTION_TYPE.TV_003, QUESTION_TYPE.TA_003, QUESTION_TYPE.CH_011,
                            ].includes(question_type)) {
                                solutions[`${a_index}#${0}`] = answer.id;
                                answer_pupil[`${a_index}#${0}`] = '';
                                break;
                            }
                            // Đáp án nguyên bản sau khi cắt thành mảng xx&yy&zz => [xx,yy,zz]
                            const items = splitStringBySpecialCharacter(solution.noi_dung_dap_an, true);
                            const content = answer.content;
                            // Dạng true false
                            if (question_type && [
                                QUESTION_TYPE.CH_009
                            ].includes(question_type) && typeof items[0].data === 'string') {
                                solutions[`${a_index}#${0}`] = items[0].data;
                                answer_pupil[`${a_index}#${0}`] = '';
                                break;
                            }

                            // console.log("ITEMS---", items, answer.content)
                            let i = 0;// Vị trí input, hoặc select trong  content
                            for (let j = 0; j < items.length; ++j) {
                                let s_item = items[j];
                                for (; i < content.length; ++i) {
                                    const input = content[i];
                                    if (input.type != ITEM_TYPE.TEXT && 
                                        input.type != ITEM_TYPE.IMG && 
                                        typeof s_item.data == 'string') {
                                        if (input.type == ITEM_TYPE.FRACTION && 
                                            question_type && 
                                            Array.isArray(input.data) && 
                                            [
                                            QUESTION_TYPE.CH_004,
                                            QUESTION_TYPE.CH_001,
                                            QUESTION_TYPE.CH_003,
                                            QUESTION_TYPE.CH_012
                                        ].includes(question_type)) {
                                            if (input.data.length > 3) {
                                               continue
                                            }
                                            for (let k = 0; k < input.data.length; ++k) {
                                                if (Array.isArray(input.data) && 
                                                    (input.data[k] === '[]' ||
                                                    input.data[k].includes('[]'))
                                                ) {
                                                    let getInputs: any = input.data[k].match(regexCheckRenderInput);
                                                    if (input.data[k] && getInputs.length > 1) {
                                                        //Nếu trong cùng 1 tử số or mẫu số có 2 ô input trở lên
                                                        for (var m = 0; m < getInputs.length; m++) {
                                                            let f = items[j];
                                                            if (f && typeof f.data === 'string') {
                                                                solutions[`${a_index}#${i}#${k}#${m}`] = f.data;
                                                                answer_pupil[`${a_index}#${i}#${k}#${m}`] = '';
                                                            }
                                                            j++;
                                                        }
                                                    } else {
                                                        let f = items[j];
                                                        //Nếu trong cùng tử số or mẫu số có 1 ô input
                                                        if (f && typeof f.data === 'string') {
                                                            solutions[`${a_index}#${i}#${k}`] = f.data;
                                                            answer_pupil[`${a_index}#${i}#${k}`] = '';
                                                        }
                                                        j++;
                                                    }
                                                    // let f = items[j];
                                                    // if (f && typeof f.data == 'string') {
                                                    //     solutions[`${a_index}#${i}#${k}`] = f.data;
                                                    //     answer_pupil[`${a_index}#${i}#${k}`] = ''
                                                    // }
                                                    // j++;
                                                }
                                            }
                                        } else if (input.type != ITEM_TYPE.AUDIO) {
                                            s_item = items[j]
                                            // Đáp án biến đổi lại
                                            if(typeof s_item.data === 'string'){
                                                solutions[`${a_index}#${i}`] = s_item.data;
                                                answer_pupil[`${a_index}#${i}`] = '';
                                                i++;
                                                break;
                                            }
                                          
                                        }
                                    }

                                    if (question_type) {

                                        if (input.type == ITEM_TYPE.IMG
                                            && [
                                                QUESTION_TYPE.CH_002
                                            ].includes(question_type) && typeof s_item.data == 'string') {
                                            solutions[`${a_index}#${i}`] = s_item.data;
                                            answer_pupil[`${a_index}#${i}`] = '';
                                        }

                                        // Dạng chọn ảnh
                                        if (input.type == ITEM_TYPE.IMG
                                            && [
                                                QUESTION_TYPE.CH_005, QUESTION_TYPE.TA_013, QUESTION_TYPE.TV_013,
                                            ].includes(question_type)
                                            && content[0] && typeof content[0].data == 'string') {
                                            solutions[`${a_index}#${i}`] = content[0].data;
                                            answer_pupil[`${a_index}#${i}`] = '';
                                        }

                                        if (input.type == ITEM_TYPE.TEXT
                                            && question_type == QUESTION_TYPE.CH_009
                                        ) {
                                            solutions[`${a_index}#${i}`] = solution.noi_dung_dap_an;
                                            answer_pupil[`${a_index}#${i}`] = '';
                                        }

                                        if (input.type == ITEM_TYPE.IMG
                                            && [QUESTION_TYPE.TV_003, QUESTION_TYPE.TA_003].includes(question_type)
                                            && content[0] && typeof content[0].data == 'string') {
                                            solutions[`${a_index}#${i}`] = content[0].data;
                                            answer_pupil[`${a_index}#${i}`] = '';
                                        }
                                    }

                                }
                            }

                        }
                    }
                }
            }

            question_render.push({
                id: question.id,
                random: question.random,
                pos: index,
                title: title,
                answers: answers,
                solutions: solutions,
                explain: explain,
                note: content.ghi_chu,
                difficult_level: content.difficult_level,
                answer_pupil: answer_pupil,
                code: content.ma_cau_hoi,
                type: question.content ? question.content.kieu_cau_hoi : '',
                status: 0
            })

        }
    }
    return question_render;
}

export const handleCheckQuestion = (questions: QuestionRender[]) => {
    let question_checked = [];
    for (const question of questions) {
        if (question.id && 
            ![
                QUESTION_TYPE.TV_010,
                QUESTION_TYPE.TV_011,
                QUESTION_TYPE.TV_012,
              ].includes(question?.type)) {
            let is_answer = false;
            let is_correct = true;
            // Dạng kéo thả đáp án vào vùng trống
            if ([QUESTION_TYPE.TV_009, QUESTION_TYPE.TA_009].includes(question.type)) {
                const keys = Object.keys(question.answer_pupil);
                for (const key of keys) {
                    const pupil_answer = question.answers.filter(ans => ans.label === key)
                        .sort((a, b) => a.id > b.id ? 1 : -1)
                        .map(ans => ans.id)
                        .join("#");
                    if (pupil_answer !== question.solutions[key]) {
                        is_correct = false;
                    }
                }
                is_answer = question.answers.filter(ans => ans.label === 'main').length < question.answers.length;

                // Dạng sắp xếp ảnh
            } else if (question.type == QUESTION_TYPE.CH_008) {
                const solution = question.answers.slice().sort((a, b) => (a.pos - b.pos)).map(item => '#' + item.id + '#').join('');
                if (question.focus) {
                    is_answer = true;
                }
                if (solution != question.solutions.content) {
                    is_correct = false;
                }

            } else if (question.type == QUESTION_TYPE.TA_014 ||
                question.type == QUESTION_TYPE.TV_014) {
                let answer_pupil = question.answer_pupil;
                let solution = question.solutions;
                for (const key of Object.keys(answer_pupil)) {
                    if (answer_pupil[key]) {
                        is_answer = true;
                        break;
                    }
                }
                const keys = Object.keys(solution);
                for (let key of keys) {
                    let tmp_a_pupil = answer_pupil[key]?.split('_')?.[0];
                    let tmp_a_solution = solution[key]?.split('_')?.[0];
                    if (tmp_a_pupil !== tmp_a_solution) {
                        is_correct = false;
                        break;
                    }
                }

                if (!keys || !keys.length) {
                    is_correct = false;
                }

            } else {
                let answer_pupil = question.answer_pupil;
                let solution = question.solutions;
                for (const key of Object.keys(answer_pupil)) {
                    if (answer_pupil[key]) {
                        is_answer = true;
                        break;
                    }
                }
                const keys = Object.keys(solution);
                for (let key of keys) {
                    if (answer_pupil[key] !== solution[key]) {
                        is_correct = false;
                        break;
                    }
                }

                if (!keys || !keys.length) {
                    is_correct = false;
                }

                if ([
                    QUESTION_TYPE.CH_005, QUESTION_TYPE.TV_003,
                    QUESTION_TYPE.TA_003, QUESTION_TYPE.CH_006,
                    QUESTION_TYPE.TA_004, QUESTION_TYPE.TV_004,
                    QUESTION_TYPE.TA_013, QUESTION_TYPE.TV_013,
                    QUESTION_TYPE.CH_010, QUESTION_TYPE.CH_011,
                    QUESTION_TYPE.TA_006, QUESTION_TYPE.TV_006,
                ].includes(question.type)) {
                    const key_ans = Object.keys(answer_pupil);
                    if (keys.length != key_ans.length) {
                        is_correct = false;
                    }
                }
            }

            question_checked.push({
                status: !is_answer ? S_UNANSWER : is_correct ? S_ANSWER_CORRECT : S_ANSWER_WRONG,
                question_id: question.id,
                level: question.difficult_level,
                data: JSON.stringify(question.answer_pupil),
                question: question,
                questions_list: questions,
            })
        }
    }
    return question_checked;
}

