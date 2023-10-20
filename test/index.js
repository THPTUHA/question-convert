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
    },
    {
        "id": 203241,
        "title": null,
        "title_ltvc": null,
        "content": {
            "ma_cau_hoi": "NCZ108_T_1_2_50",
            "kieu_cau_hoi": "CH_011",
            "do_kho": "Nhận biết",
            "voice": "",
            "format": "",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "Nghiệm của hệ phương trình $\\left\\{\\begin{array}{l}\\frac{1}{x+2}+\\frac{2}{y-1}=1 \\\\ \\frac{3}{x+2}-\\frac{9}{y-1}=-2\\end{array}\\right.$ là"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "$\\left\\{\\begin{array}{l}x=3 \\\\ y=2\\end{array}\\right.$"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "$\\left\\{\\begin{array}{l}x=3 \\\\ y=-4\\end{array}\\right.$"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "$\\left\\{\\begin{array}{l}x=1 \\\\ y=4\\end{array}\\right.$"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "$\\left\\{\\begin{array}{l}x=4 \\\\ y=3\\end{array}\\right.$"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "C",
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
        "id": 98948,
        "title": null,
        "title_ltvc": null,
        "content": {
            "ma_cau_hoi": "CB_T_5_36_10",
            "kieu_cau_hoi": "CH_004",
            "do_kho": "Thông hiểu",
            "voice": "",
            "format": "",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "Cho hình vẽ. Tính tỉ số diện tích hình tam giác ACD và diện tích hình vuông ABCD?\n#_Q_CB_T_5_36_10_1.png_#"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "#_(#_S_ ACD_#)/(#_S_ABCD_#)_# = #_[]/[]_#\n(Viết kết quả dưới dạng phân số tối giản.)"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_dap_an": "1&2"
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
    },
    {
        "id": 134509,
        "title": null,
        "title_ltvc": null,
        "content": {
            "ma_cau_hoi": "CB_TV_2_8_BDTV001_6",
            "kieu_cau_hoi": "TV_009",
            "do_kho": "Nhận biết",
            "voice": "",
            "format": "Luyện từ và câu",
            "random": 1,
            "noi_dung_cau_hoi": {
                "noi_dung": "<b>Sắp xếp các từ sau vào nhóm thích hợp.</b>\n#_Group:1_Đồ dùng học tập;2_Đồ dùng nấu ăn_#"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "thước kẻ"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "bút chì"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "tẩy"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "bút màu"
                    }
                },
                {
                    "id_cau_tra_loi": "E",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "ê ke"
                    }
                },
                {
                    "id_cau_tra_loi": "F",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "nồi"
                    }
                },
                {
                    "id_cau_tra_loi": "G",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "chảo"
                    }
                },
                {
                    "id_cau_tra_loi": "H",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "bát"
                    }
                },
                {
                    "id_cau_tra_loi": "I",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "thìa"
                    }
                },
                {
                    "id_cau_tra_loi": "J",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "đĩa"
                    }
                },
                {
                    "id_cau_tra_loi": "K",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "đũa"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_dap_an": "1_A&B&C&D&E"
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_dap_an": "2_F&G&H&I&J&K"
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
        "parent_code": "CB_TV_2_8_BDTV001",
        "admin_approve": 1,
        "random": true,
        "format": "Luyện từ và câu"
    },
    {
        "id": 128100,
        "title": null,
        "title_ltvc": null,
        "content": {
            "ma_cau_hoi": "CB_TV_2_8_BDTV001_17",
            "kieu_cau_hoi": "TV_004",
            "do_kho": "Nhận biết",
            "voice": "",
            "format": "Luyện từ và câu",
            "random": 1,
            "noi_dung_cau_hoi": {
                "noi_dung": "<b>Câu sau có mấy từ chỉ đồ dùng học tập?</b>\nSau khi học bài xong, Mai thường tự soạn sách, vở, bút, thước, tẩy đầy đủ rồi mới đi ngủ."
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "5 từ"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "4 từ"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "3 từ"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "2 từ"
                    }
                },
                {
                    "id_cau_tra_loi": "E",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "6 từ"
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
        "parent_code": "CB_TV_2_8_BDTV001",
        "admin_approve": 1,
        "random": true,
        "format": "Luyện từ và câu"
    },
    {
        "id": 203373,
        "title": null,
        "title_ltvc": null,
        "content": {
            "ma_cau_hoi": "NCZ108_T_1_5_6",
            "kieu_cau_hoi": "CH_001",
            "do_kho": "Nhận biết",
            "voice": "",
            "format": "",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "<b>Fill in the blanks and choose the correct answer.</b>"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "#_618/10_# = #_[] []/[]_# = #_[]_#"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "#_DR:Sixty- one point eight;Eight point sixty-one_#"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_dap_an": "61&8&10&61,8"
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_dap_an": "Sixty- one point eight"
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
        "id": 203382,
        "title": null,
        "title_ltvc": null,
        "content": {
            "ma_cau_hoi": "NCZ108_T_1_5_16",
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
console.log(data[9])