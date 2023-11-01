export const BASE_IMG_QUESTION_URL = `${process.env.REACT_APP_BASE_IMG_VNG ??
    "https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media"
    }/public/questions`;


export const ITEM_TYPE = {
    TEXT: 0,
    INPUT: 1,
    DROP_LIST: 2,
    IMG: 3,
    ANSWER: 4,
    FRACTION: 5,
    AUDIO: 6,
    BREAKLINE: 7,
    INLINE: 8,
    DROP_ANSWER: 9,
    GROUP: 10,
    WORD: 11,
    READ_TD: 12,
    READ_ND: 13,
    READ_TG: 14,
    MATH_JAX: 15,
    DIVISIBLE_SIGN: 16,
};

export const QUESTION_TYPE = {
    CH_001: "CH_001",
    CH_002: "CH_002",
    CH_003: "CH_003",
    CH_004: "CH_004",
    CH_005: "CH_005",
    CH_006: "CH_006",
    CH_007: "CH_007",
    CH_008: "CH_008",
    CH_009: "CH_009",
    CH_010: "CH_010",
    CH_011: "CH_011",
    CH_012: "CH_012",
    CH_013: "CH_013",

    TV_001: "TV_001",
    TA_001: "TA_001",
    TV_002: "TV_002",
    TA_002: "TA_002",
    TV_003: "TV_003",
    TA_003: "TA_003",
    TV_004: "TV_004",
    TA_004: "TA_004",
    TV_005: "TV_005",
    TA_005: "TA_005",
    TV_006: "TV_006",
    TA_006: "TA_006",
    TV_013: "TV_013",
    TA_013: "TA_013",

    TV_007: "TV_007",
    TV_009: "TV_009",
    TA_009: "TA_009",
    TA_007: "TA_007",
    TV_008: "TV_008",
    TA_008: "TA_008",
    TV_014: "TV_014",
    TA_014: "TA_014",
    TV_010: "TV_010",
    TA_010: "TA_010",
    TV_011: "TV_011",
    TA_011: "TA_011",
    TV_012: "TV_012",
};


export const S_ANSWER_CORRECT = 1;
export const S_ANSWER_WRONG = 2;
export const S_UNANSWER = 3;