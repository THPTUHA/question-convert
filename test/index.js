const { hanldeQuestion } = require("../dist")

const questions = [
    {
        "id": 214176,
        "content": {
            "ma_cau_hoi": "NC_T_5_37_9",
            "kieu_cau_hoi": "CH_004",
            "do_kho": "Vận dụng",
            "voice": "",
            "format": "",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "Lúc 6 giờ sáng tại bến A, một chuyến tàu thuỷ chở khách xuôi dòng đến B. Khi đến B, tàu nghỉ lại tại đó 2 giờ để trả và đón khách rồi lại ngược dòng về A. Tàu đến bến A lúc 3 giờ 20 phút chiều cùng ngày. Hãy tính khoảng cách giữa hai bến A và B, biết rằng thời gian đi xuôi dòng nhanh hơn thời gian đi ngược dòng là 40 phút và vận tốc dòng nước là 0,8m/s."
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "Khoảng cách giữa hai bến A và B là #_[]_#km."
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_dap_an": "161.28"
                }
            ],
            "giai_thich_dap_an": {
                "noi_dung": "Đổi 40 phút = #_2/3_# giờ; 0,8 m/s = 2,88 km/h\nTa có 3 giờ 20 phút chiều tức là 15 giờ 20 phút.\nTổng thời gian đi và về trên quãng sông AB là:\n15 giờ 20 phút - 6 giờ - 2 giờ = 7 giờ 20 phút = #_22/3_# giờ\nThời gian xuôi dòng sông là:\n (#_22/3_# + #_2/3_#) : 2 = 4 (giờ)\nThời gian ngược dòng sông là:\n4 + #_2/3_# = #_14/3_# (giờ)\nTrên cùng một quãng sông AB thì vận tốc và thời gian là hai đại lượng tỉ lệ nghịch, nên ta có:\n #_(#_v_x_#)/(#_v_ng_#)_# = #_(#_t_ng_#)/(#_t_x_#)_# = #_(#_14:3_#)/(4)_# = #_7/6_#\nHiệu vận tốc xuôi dòng và ngược dòng là:\n2,88 × 2 = 5,76 (km/h)\nTa có sơ đồ:\n#_S_NC_T_5_37_9_1.png_#\nVận tốc xuôi dòng là:\n5,76 × 7 = 40,32 (km/h)\nQuãng sông AB dài số km là:\n40,32 × 4 = 161,28 (km)\nĐáp số: 161,28 km"
            },
            "ghi_chu": "Vận tốc xuôi dòng 7 phần, ngược dòng 6 phần, hiệu là 5,76km/h",
            "difficult_level": 3
        },
        "difficult_level": 2,
        "random": false
    }
]

const data = hanldeQuestion(questions)
// console.log(data[1].answers[3].content)
console.log(JSON.stringify(data))