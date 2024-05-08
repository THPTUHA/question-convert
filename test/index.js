const { hanldeQuestion } = require("../dist")

const questions = [
    {
        "id": 214176,
        "content": {
            "ma_cau_hoi": "",
            "kieu_cau_hoi": "GV_004",
            "do_kho": "Thông hiểu",
            "random": 0,
            "noi_dung_cau_hoi": {
                "noi_dung": "Bảng sau cho biết nhiệt độ tại Hà Nội vào một ngày mùa thu. Biểu đồ nào biểu diễn bảng thống kê trên.\n<img src=https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/xxx-zz1935523192.png />\n"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "<img src=https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/xxx-zz3504160018.png />"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "<img src=https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/xxx-zz917574455.png />"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "<img src=https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/xxx-zz3139653492.png />"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "<img src=https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/xxx-zz2573161932.png />"
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
                "noi_dung": "\nTừ bảng thống kê, nhiệt độ tại các thời điểm 8h, 10h, 12h, 14h, 16h, 18h, 20h lần lượt là 23, 25, 34, 32, 26, 22, 18. Do đó biểu đồ biểu diễn là:\n<img src=https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/xxx-zz3504160018.png />\n\n\n\n"
            },
            "difficult_level": 2
        },
        "difficult_level": 2,
        "random": false
    }
]

const data = hanldeQuestion(questions)
// console.log(data[1].answers[3].content)
console.log(JSON.stringify(data))