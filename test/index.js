const { hanldeQuestion } = require("../dist")

const questions = [
    {
        "id": 214176,
        "content" : {
            "ma_cau_hoi": "NCZ108_T_1_6_2",
            "kieu_cau_hoi": "CH_004",
            "do_kho": "Nhận biết",
            "voice": "",
            "format": "",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "b"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "#_(#_(ababab)-_#)/(#_(cdcdcd)-_#)_# = #_(#_(ababab)-_# : #_[]_#)/(#_(cdcdcd)-_# : #_[]_#)_# = #_(#_(ab)-_#)/(#_(cd)-_#)_#  \n(Với (#_(cd)-_#) khác 0)"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_dap_an": "10101&10101"
                }
            ],
            "giai_thich_dap_an": {
                "noi_dung": "Ta có: \n#_(ababab)-_# = #_(ab)-_# × 10101\n→ #_(ababab)-_# : 10101 = #_(ab)-_#\n#_(cdcdcd)-_# = #_(cd)-_# × 10101\n→ #_(cdcdcd)-_# : 10101 = #_(cd)-_#\nVậy\n#_(#_(ababab)-_#)/(#_(cdcdcd)-_#)_# = #_(#_(ababab)-_# : 10101)/(#_(cdcdcd)-_# : 10101)_# = #_(#_(ab)-_#)/(#_(cd)-_#)_#  \n → Số cần điền vào ô trống là 10101."
            },
            "ghi_chu": null,
            "difficult_level": 1
        },
        "difficult_level": 2,
        "random": false
    }
]

const data = hanldeQuestion(questions)
// console.log(data[1].answers[3].content)
console.log(JSON.stringify(data))