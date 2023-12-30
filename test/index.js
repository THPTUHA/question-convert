const { hanldeQuestion } = require("../dist")

const questions = [
    {
        "id": 249148,
        "title": null,
        "title_ltvc": null,
        "content": {
            "ma_cau_hoi": "NCZ126_T_1_1_16",
            "kieu_cau_hoi": "CH_004",
            "do_kho": "Thông hiểu",
            "voice": "",
            "format": "",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "<b>Convert the fractions into the decimal numbers.</b>\nExample: \n#_1/2_# = #_(1 × 5)/(2 × 5)_# = #_5/10_# = 0,5"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "#_2/5_# = #_(2 × #_[]_#)/(5 × #_[]_#)_# = #_[]/[]_# = #_[]_#"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_dap_an": "2&2&4&10&0,4"
                }
            ],
            "giai_thich_dap_an": {
                "noi_dung": null
            },
            "ghi_chu": null,
            "difficult_level": 2
        },
        "voice_id": null,
        "coin": null,
        "difficult_level": 2,
        "code": null,
        "parent_code": null,
        "admin_approve": 1,
        "random": false,
        "format": ""
    }
]

const data = hanldeQuestion(questions)
// console.log(data[1].answers[3].content)
console.log(data)