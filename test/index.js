const { hanldeQuestion } = require("../dist")

const questions = [
    {
        "id": 203332,
        "title": null,
        "title_ltvc": null,
        "content": {
            "ma_cau_hoi": "NCZ108_T_1_1_1",
            "kieu_cau_hoi": "CH_006",
            "do_kho": "Vận dụng",
            "voice": "",
            "format": "",
            "random": 1,
            "noi_dung_cau_hoi": {
                "noi_dung": "Chọn đáp án đúng. \n#_(#_(abab)-_#)/(#_(cdcd)-_#)_# = #_[]/[]_# (a; c là các chữ số khác 0)"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "#_(#_(ab)-_#)/(#_(cd)-_#)_#"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "#_(#_(a0b)-_#)/(#_(c0d)-_#)_#"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_dap_an": ""
                }
            ],
            "giai_thich_dap_an": {
                "noi_dung": "#_(#_(abab)-_#)/(#_(cdcd)-_#)_# = #_(#_(abab)-_# : 101)/(#_(cdcd)-_# : 101)_# = #_(#_(ab)-_#)/(#_(cd)-_#)_#"
            },
            "ghi_chu": null,
            "difficult_level": 3
        },
        "voice_id": null,
        "coin": null,
        "difficult_level": 3,
        "code": null,
        "parent_code": null,
        "admin_approve": 1,
        "random": true,
        "format": ""
    },
    {
        "id": 203214,
        "title": null,
        "title_ltvc": null,
        "content": {
            "ma_cau_hoi": "NCZ108_T_1_2_23",
            "kieu_cau_hoi": "CH_011",
            "do_kho": "Nhận biết",
            "voice": "",
            "format": "",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "Hàm số $y=(\\sqrt{m}-1) x-1$ là hàm số bậc nhất khi"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "$m \\neq 1$"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "$0 \\leq m \\leq 1$"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "$m>1$"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "$m \\geq 0 ; m \\neq 1$"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_dap_an": ""
                }
            ],
            "giai_thich_dap_an": {
                "noi_dung": null
            },
            "ghi_chu": null,
            "difficult_level": 1
        },
        "voice_id": null,
        "coin": null,
        "difficult_level": 1,
        "code": null,
        "parent_code": null,
        "admin_approve": 1,
        "random": false,
        "format": ""
    },
    {
        "id": 203196,
        "title": null,
        "title_ltvc": null,
        "content": {
            "ma_cau_hoi": "NCZ108_T_1_2_1",
            "kieu_cau_hoi": "CH_004",
            "do_kho": "Nhận biết",
            "voice": "",
            "format": "",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "Cho #_S_1_# = 1 + 2; #_S_2_# = 3 + 4 + 5; #_S_3_# = 6 + 7 + 8 + 9; #_S_4_# = 10 + 11 + 12 + 13 + 14; ….\nTính #_S_100_#?"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "#_S_100_# = #_[]_#"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_dap_an": "515100"
                }
            ],
            "giai_thich_dap_an": {
                "noi_dung": "Số số hạng cua #_S_1_#; #_S_2_#; #_S_3_#; ….; #_S_99_# theo thứ tự bằng 1; 2; 3; 4; …., 100.\nTrước #_S_100_# có 2 + 3 + 4 + 5 + …. + 100 = #_((2 + 100) × 99))/(2)_# = 5049 số.\nSố hạng đầu tiên của #_S_100_# là 5050.\nMà #_S_100_# có 101 số nên #_S_100_# = #_((5050 + 5051) × 101)/(2)_# = 515100"
            },
            "ghi_chu": null,
            "difficult_level": 1
        },
        "voice_id": null,
        "coin": null,
        "difficult_level": 1,
        "code": null,
        "parent_code": null,
        "admin_approve": 1,
        "random": false,
        "format": ""
    },
    {
        "id": 203221,
        "title": null,
        "title_ltvc": null,
        "content": {
            "ma_cau_hoi": "NCZ108_T_1_2_30",
            "kieu_cau_hoi": "CH_011",
            "do_kho": "Nhận biết",
            "voice": "",
            "format": "",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "Cho hình trụ có diện tích hình tròn đáy là $16 \\pi \\mathrm{cm}^{2}$, chiều cao $6 \\mathrm{~cm}$. Diện tích xung quanh bằng"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "$48 \\pi\\left(\\mathrm{cm}^{2}\\right)$"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "$8 \\pi\\left(\\mathrm{cm}^{2}\\right)$"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "$24 \\pi\\left(\\mathrm{cm}^{2}\\right)$"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "$12 \\pi\\left(\\mathrm{cm}^{2}\\right)$"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_dap_an": ""
                }
            ],
            "giai_thich_dap_an": {
                "noi_dung": null
            },
            "ghi_chu": null,
            "difficult_level": 1
        },
        "voice_id": null,
        "coin": null,
        "difficult_level": 1,
        "code": null,
        "parent_code": null,
        "admin_approve": 1,
        "random": false,
        "format": ""
    }
]

const data = hanldeQuestion(questions)
// console.log(data[1].answers[3].content)
console.log(data[3].answers[0])