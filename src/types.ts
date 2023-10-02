export type Result = {
    code: number,
    message: string,
    result: boolean,
};

export type RawPupil = {
    id: number,
    name: string,
}

export type RawContentQuestion = {
    ma_cau_hoi: string,
    kieu_cau_hoi: string,
    do_kho: string,
    voice: string,
    format: string,
    random: number,
    noi_dung_cau_hoi: {
        noi_dung: string
    },
    ds_cau_tra_loi: {
        id_cau_tra_loi: string,
        noi_dung_cau_tra_loi: {
            noi_dung: string
        }
    }[],
    dap_an: {
        id_cau_tra_loi: string,
        noi_dung_dap_an: string
    }[],
    giai_thich_dap_an: {
        noi_dung: string | null
    },
    ghi_chu: string | null,
    difficult_level: number,
}

export type RawQuestion = {
    id: number,
    title?: string,
    title_ltvc?: string,
    content?: RawContentQuestion,
    voice_id?: number,
    coin?: number,
    difficult_level: number,
    random: number,
    code?: string,
    parent_code?: string,
}

export type Item = {
    type: number,
    data: string | string[] | Group,
}


export type AnswerRender = {
    id: string,
    content: Item[],
    pos: number,
    label?: string
}


export type Solution = {
    [key: string]: string
}

export type QuestionRender = {
    id: number,
    random: number,
    pos: number,
    title: Item[],
    answers: AnswerRender[],
    solutions: Solution,
    explain: Item[],
    note: string | null,
    difficult_level: number,
    answer_pupil: Solution,
    type: string,
    status: number,
    focus?: string
}

export type ExamResult = {
    point: number,
    answered_number: number,
    correct_number: number,
    top: number,
    rank: number
}

export type QuestionChecked = {
    status: number;
    question_id: number;
    level: number;
}

export type ElementRender = {
    id: string,
    content: string,
    prefix: string
}

export type Group = {
    [key: string]: Item[]
}

export type RecordAnswerExamPupil = {
    answer: any,
    question_exam_id: number,
    status: number,
}

export type Ans_CH_001 = [{
    id_cau_tra_loi: string,
    noi_dung_dap_an: string
}]
export type Ans_CH_002 = Ans_CH_001;
export type Ans_CH_003 = Ans_CH_001;
export type Ans_CH_004 = Ans_CH_001;
export type Ans_CH_005 = string[];
export type Ans_CH_006 = Ans_CH_005;
export type Ans_CH_007 = [{
    from_id: string,
    to_id: string
}];

export type Ans_CH_008 = string
export type Ans_CH_009 = (boolean | null)[]
export type Ans_CH_010 = Ans_CH_005

export type Ans_TA_001 = Ans_CH_001
export type Ans_TA_002 = Ans_CH_001
export type Ans_TA_003 = [{
    id_cau_tra_loi: string,
    noi_dung_cau_tra_loi: {
        id_cau_tra_loi: string
    }
}]
export type Ans_TA_004 = Ans_CH_005
export type Ans_TA_005 = Ans_CH_007
export type Ans_TA_006 = Ans_CH_007
export type Ans_TA_007 = Ans_CH_001
export type Ans_TA_008 = [{
    id_cau_tra_loi: string,
    noi_dung_dap_an: string
} | null]
export type Ans_TA_009 = Ans_CH_001
export type Ans_TA_010 = Ans_CH_001
export type Ans_TA_013 = Ans_CH_006
export type Ans_TA_014 = Ans_CH_001

export type Ans_TV_001 = Ans_CH_001
export type Ans_TV_002 = Ans_CH_001
export type Ans_TV_003 = Ans_TA_003
export type Ans_TV_004 = Ans_CH_005
export type Ans_TV_005 = Ans_CH_007
export type Ans_TV_006 = Ans_CH_007
export type Ans_TV_007 = Ans_CH_001
export type Ans_TV_008 = Ans_TA_008
export type Ans_TV_009 = Ans_CH_001
export type Ans_TV_011 = Ans_CH_001
export type Ans_TV_013 = Ans_CH_006
export type Ans_TV_014 = Ans_CH_001