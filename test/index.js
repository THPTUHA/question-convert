const { hanldeQuestion } = require("../dist")

const questions = [
    {
        "id": 10918,
        "title": null,
        "title_ltvc": null,
        "coin": null,
        "difficult_level": 3,
        "content": {
            "ma_cau_hoi": "CB_T_5_10_18",
            "kieu_cau_hoi": "CH_006",
            "do_kho": "Vận dụng",
            "voice": "",
            "format": "Dạng 3",
            "random": 1,
            "noi_dung_cau_hoi": {
                "noi_dung": "Một tổ công nhân gồm 8 người làm trong một ngày lắp được 24 chiếc xe đạp. Nếu tổ thợ đó nhận thêm 4 người nữa, năng suất làm việc của mỗi người là như nhau, thì trong một tuần lắp được bao nhiêu chiếc xe đạp? (Biết mỗi tuần cả tổ được nghỉ 1 ngày)"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "216 chiếc"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "252 chiếc"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "288 chiếc"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "96 chiếc"
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
                "noi_dung": "Tóm tắt: \n 1 tuần có 7 ngày, nhưng tổ đó nghỉ 1 ngày tức là làm việc 6 ngày. \n 8 người: 1 ngày: 24 chiếc xe đạp\n (8 + 4) người: 6 ngày: ? chiếc xe đạp\nBài giải:\nNếu tổ thợ đó nhận thêm 4 người nữa thì tổng số người lúc sau là:\n 8 + 4 = 12 (người)\n 1 người làm trong 1 ngày lắp được số xe đạp là:\n 24 : 8 = 3 (chiếc)\n 1 người trong 6 ngày lắp được số xe đạp là:\n 3 × 6 = 18 (chiếc)\n12 người trong 6 ngày lắp được số xe đạp là:\n 18 × 12 = 216 (chiếc)\n Đáp số: 216 chiếc xe đạp"
            },
            "ghi_chu": null,
            "difficult_level": 3
        },
        "random": true,
        "parent_code": null,
        "previousResults": 0
    },
    {
        "id": 10919,
        "title": null,
        "title_ltvc": null,
        "coin": null,
        "difficult_level": 3,
        "content": {
            "ma_cau_hoi": "CB_T_5_10_21",
            "kieu_cau_hoi": "CH_004",
            "do_kho": "Vận dụng",
            "voice": "",
            "format": "Dạng 3",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "Một tổ thợ mộc có 3 người trong 4 ngày đóng được 60 cái ghế. Nếu tổ có 6 người làm trong 10 ngày thì sẽ đóng được bao nhiêu cái ghế? Biết năng suất mỗi người đều như nhau."
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "6 người làm trong 10 ngày thì sẽ đóng được #_[]_# cái ghế."
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_dap_an": "300"
                }
            ],
            "giai_thich_dap_an": {
                "noi_dung": "Tóm tắt:\n 3 người: 4 ngày: 60 cái ghế\n 6 người: 10 ngày: ? cái ghế\nBài giải:\n 3 người trong 1 ngày đóng được số ghế là:\n 60 : 4 = 15 (cái)\n 6 người gấp 3 người số lần là:\n 6 : 3 = 2 (lần)\n 6 người trong 1 ngày thì đóng được số ghế là:\n 15 × 2 = 30 (cái)\n6 người trong 10 ngày thì đóng được số ghế là:\n 30 × 10 = 300 (cái)\n Đáp số: 300 cái"
            },
            "ghi_chu": null,
            "difficult_level": 3
        },
        "random": false,
        "parent_code": null,
        "previousResults": 0
    },
    {
        "id": 10920,
        "title": null,
        "title_ltvc": null,
        "coin": null,
        "difficult_level": 3,
        "content": {
            "ma_cau_hoi": "CB_T_5_10_20",
            "kieu_cau_hoi": "CH_006",
            "do_kho": "Vận dụng",
            "voice": "",
            "format": "Dạng 3",
            "random": 1,
            "noi_dung_cau_hoi": {
                "noi_dung": "Trong 2 ngày, một tổ công nhân gồm 9 người sửa được xong 72m đường. Hỏi với thời gian 5 ngày, 10 người sửa được bao nhiêu mét đường biết sức làm của mỗi người là như nhau?"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "200m"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "400m"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "180m"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "100m"
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
                "noi_dung": "Tóm tắt: \n 2 ngày: 9 người: 72m đường\n 5 ngày: 10 người: ? m đường\nBài giải:\n  Trong 2 ngày, 1 người công nhân sửa được số mét đường là:\n 72 : 9 = 8 (m) \n Trong 1 ngày, 1 người công nhân sửa được số mét đường là:\n 8 : 2 = 4 (m)\n Trong 5 ngày, 1 người công nhân sửa được số mét đường là:\n 4 × 5 = 20 (m)\n Trong 5 ngày, 10 người sửa được số mét đường là:\n 20 × 10 = 200 (m)\n Đáp số: 200m đường"
            },
            "ghi_chu": null,
            "difficult_level": 3
        },
        "random": true,
        "parent_code": null,
        "previousResults": 0
    },
    {
        "id": 10921,
        "title": null,
        "title_ltvc": null,
        "coin": null,
        "difficult_level": 3,
        "content": {
            "ma_cau_hoi": "CB_T_5_10_19",
            "kieu_cau_hoi": "CH_006",
            "do_kho": "Vận dụng",
            "voice": "",
            "format": "Dạng 3",
            "random": 1,
            "noi_dung_cau_hoi": {
                "noi_dung": "Một đoàn khách du lịch có 15 khách mua vé vào cửa một khu thắng cảnh hết tất cả 450 000 đồng. Vậy nếu đoàn khách đó có thêm 8 người nữa thì sẽ phải trả số tiền mua vé thắng cảnh là:"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "690 000 đồng"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "240 000 đồng"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "680 000 đồng"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "250 000 đồng"
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
                "noi_dung": "Tóm tắt:\n 15 khách: 450 000 đồng\n (15 + 8) khách: ? đồng\nBài giải:\nNếu đoàn khách đó có thêm 8 người nữa thì tổng số khách của đoàn đó là:\n 15 + 8 = 23 (khách)\n 1 khách du lịch mua vé vào cửa hết số tiền là:\n 450 000 : 15 = 30 000 (đồng)\n Nếu đoàn khách đó có thêm 8 người nữa thì sẽ phải trả số tiền mua vé thắng cảnh là:\n 30 000 × 23 = 690 000 (đồng)\n Đáp số: 690 000 đồng"
            },
            "ghi_chu": null,
            "difficult_level": 3
        },
        "random": true,
        "parent_code": null,
        "previousResults": 0
    },
    {
        "id": 10922,
        "title": null,
        "title_ltvc": null,
        "coin": null,
        "difficult_level": 3,
        "content": {
            "ma_cau_hoi": "CB_T_5_10_22",
            "kieu_cau_hoi": "CH_004",
            "do_kho": "Vận dụng",
            "voice": "",
            "format": "Dạng 3",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "Một tổ sản xuất gồm 8 người trong 4 giờ thì đóng được 500 viên gạch. Nếu tổ đó có 16 người trong 8 giờ thì đóng xong được bao nhiêu viên gạch? (Biết năng suất của mỗi người đều như nhau.)"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "16 người trong 8 giờ thì đóng xong được #_[]_# viên gạch."
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_dap_an": "2000"
                }
            ],
            "giai_thich_dap_an": {
                "noi_dung": "Tóm tắt:\n 8 người: 4 giờ: 500 viên gạch\n 16 người: 8 giờ: ? viên gạch\nBài giải:\n 16 người gấp 8 người số lần là:\n 16 : 8 = 2 (lần)\n 8 giờ gấp 4 giờ số lần là:\n 8 : 4 = 2 (lần)\n Vậy 16 người trong 8 giờ thì đóng được số gạch là:\n 500 × 2 × 2 = 2000 (viên)\n Đáp số: 2000 viên gạch"
            },
            "ghi_chu": null,
            "difficult_level": 3
        },
        "random": false,
        "parent_code": null,
        "previousResults": 0
    },
    {
        "id": 10923,
        "title": null,
        "title_ltvc": null,
        "coin": null,
        "difficult_level": 3,
        "content": {
            "ma_cau_hoi": "CB_T_5_10_26",
            "kieu_cau_hoi": "CH_006",
            "do_kho": "Vận dụng",
            "voice": "",
            "format": "",
            "random": 1,
            "noi_dung_cau_hoi": {
                "noi_dung": "Một tổ công nhân dự định làm trong  15 ngày thì được 450 mét đường. Nhưng do tích cực làm việc nên tổ công nhân làm xong 450 mét đường trong 9 ngày. Hỏi nếu làm việc 15 ngày thì tổ công nhân làm được nhiều hơn dự định bao nhiêu mét đường?"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "300 mét đường"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "450 mét đường"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "150 mét đường"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "200 mét đường"
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
                "noi_dung": "Mỗi ngày thực tế tổ công nhân đã làm được:\n450 : 9 = 50 (m)\n15 ngày thực tế tổ công nhân đã làm được:\n50 × 15 = 750 (m)\nThực tế nếu làm trong 15 ngày thì tổ công nhân đã làm được nhiều hơn so với dự định là:\n750 – 450 = 300 (m)\nĐáp số: 300 mét đường."
            },
            "ghi_chu": null,
            "difficult_level": 3
        },
        "random": true,
        "parent_code": null,
        "previousResults": 0
    },
    {
        "id": 10924,
        "title": null,
        "title_ltvc": null,
        "coin": null,
        "difficult_level": 3,
        "content": {
            "ma_cau_hoi": "CB_T_5_10_27",
            "kieu_cau_hoi": "CH_004",
            "do_kho": "Vận dụng",
            "voice": "",
            "format": "",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "Có 5 người ăn trong 8 ngày thì hết 16 kg gạo. Hỏi 7 người ăn trong 40 ngày hết bao nhiêu ki-lô-gam gạo? Biết rằng khẩu phần ăn của mỗi người là như nhau."
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "7 người ăn trong 40 ngày hết #_[]_#kg gạo."
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_dap_an": "112"
                }
            ],
            "giai_thich_dap_an": {
                "noi_dung": "5 người ăn trong 1 ngày hết số gạo là:\n16 : 8 = 2 (kg)\n5 người ăn trong 40 ngày hết số gạo là:\n2 × 40 = 80 (kg)\n1 người ăn trong 40 ngày hết số gạo là:\n80 : 5 = 16 (kg)\n7 người ăn trong 40 ngày hết số gạo là:\n16 × 7= 112 (kg)\nĐáp số: 112 kg gạo"
            },
            "ghi_chu": null,
            "difficult_level": 3
        },
        "random": false,
        "parent_code": null,
        "previousResults": 0
    },
    {
        "id": 10925,
        "title": null,
        "title_ltvc": null,
        "coin": null,
        "difficult_level": 1,
        "content": {
            "ma_cau_hoi": "CB_T_5_10_23",
            "kieu_cau_hoi": "CH_006",
            "do_kho": "Nhận biết",
            "voice": "",
            "format": "",
            "random": 1,
            "noi_dung_cau_hoi": {
                "noi_dung": "Bạn An mua 3 chiếc bút hết 48 nghìn đồng. Hỏi nếu bạn An mua 5 chiếc bút như thế hết bao nhiêu tiền?"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "80 nghìn đồng"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "60 nghìn đồng"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "70 nghìn đồng"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "64 nghìn đồng"
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
                "noi_dung": "Giá tiền một chiếc bút là:\n48 : 3 = 16 (nghìn đồng)\nSố tiền để mua 5 chiếc bút là:\n16 × 5 = 80 (nghìn đồng)\nĐáp số: 80 nghìn đồng"
            },
            "ghi_chu": null,
            "difficult_level": 1
        },
        "random": true,
        "parent_code": null,
        "previousResults": 0
    },
    {
        "id": 10926,
        "title": null,
        "title_ltvc": null,
        "coin": null,
        "difficult_level": 1,
        "content": {
            "ma_cau_hoi": "CB_T_5_10_25",
            "kieu_cau_hoi": "CH_006",
            "do_kho": "Nhận biết",
            "voice": "",
            "format": "",
            "random": 1,
            "noi_dung_cau_hoi": {
                "noi_dung": "Một ô tô cứ đi 100km thì tiêu thụ hết 10 lít xăng. Hỏi ô tô đó đi 75km thì tiêu thụ hết bao nhiêu lít xăng?"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "#_15/2_# lít xăng"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "25 lít xăng"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "50 lít xăng"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "#_75/2_# lít xăng"
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
                "noi_dung": "Đi 1km thì ô tô tiêu thu hết số lít xăng là:\n10 : 100 = #_1/10_# (lít xăng)\nĐi 75km thì ô tô đó tiêu thu hết số lít xăng là:\n75 × #_1/10_# = #_15/2_# (lít xăng)\nĐáp số: #_15/2_# lít xăng"
            },
            "ghi_chu": null,
            "difficult_level": 1
        },
        "random": true,
        "parent_code": null,
        "previousResults": 0
    },
    {
        "id": 10927,
        "title": null,
        "title_ltvc": null,
        "coin": null,
        "difficult_level": 1,
        "content": {
            "ma_cau_hoi": "CB_T_5_10_24",
            "kieu_cau_hoi": "CH_006",
            "do_kho": "Nhận biết",
            "voice": "",
            "format": "",
            "random": 1,
            "noi_dung_cau_hoi": {
                "noi_dung": "Bạn Bình  mua 2 quyển vở  hết 24 nghìn đồng. Hỏi nếu bạn Bình mua 3 quyển vở như thế hết bao nhiêu tiền?"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "36 nghìn đồng"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "12 nghìn đồng"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "48 nghìn đồng"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "30 nghìn đồng"
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
                "noi_dung": "Giá tiền một quyển vở là:\n24 : 2 = 12 (nghìn đồng)\nSố tiền để mua 3 quyển vở là:\n12 × 3 = 36 (nghìn đồng)\nĐáp số: 36 nghìn đồng"
            },
            "ghi_chu": null,
            "difficult_level": 1
        },
        "random": true,
        "parent_code": null,
        "previousResults": 0
    }
]

console.log(hanldeQuestion(questions))