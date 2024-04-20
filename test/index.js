const { hanldeQuestion } = require("../dist")

const questions = [
    {
        "id": 212690,
        "content": {
            "ma_cau_hoi": "",
            "kieu_cau_hoi": "GV_003",
            "do_kho": "Thông hiểu",
            "random": 1,
            "noi_dung_cau_hoi": {
                "noi_dung": "Công ty A cần xây bể chứa hình hộp chữ nhật (không có nắp), đáy là hình vuông cạnh bằng <img src=\"https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/math-0.svg\" style=\"display:inline-block;width:30pt;height:20.25pt\"/>, chiều cao bằng <img src=\"https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/math-2.svg\" style=\"display:inline-block;width:29.25pt;height:20.25pt\"/>. Biết thể tích bể chứa cần xây bằng <img src=\"https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/math-4.svg\" style=\"display:inline-block;width:38.25pt;height:18pt\"/>, hỏi kích thước cạnh đáy và chiều cao bằng bao nhiêu để tổng diện tích các mặt xung quanh và mặt đáy nhỏ nhất?\n<img src=\"https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/math-zz3355370100.png\"/>\n"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": " <img src=\"https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/math-6.svg\" style=\"display:inline-block;width:98.25pt;height:33.75pt\"/>"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": " <img src=\"https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/math-8.svg\" style=\"display:inline-block;width:92.25pt;height:33.75pt\"/>"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": " <img src=\"https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/math-10.svg\" style=\"display:inline-block;width:96.75pt;height:33.75pt\"/>"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": " <img src=\"https://han01.vstorage.vngcloud.vn/v1/AUTH_9425075df801499188811151ab1de4dc/Nexta_Media/public/file/math-12.svg\" style=\"display:inline-block;width:84pt;height:15.75pt\"/>"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_dap_an": ""
                }
            ],
            "giai_thich_dap_an": {
                "noi_dung": " Chọn đáp án B là chính xác\n"
            },
            "difficult_level": 2
        },
        "difficult_level": 1,
        "random": true
    }
]

const data = hanldeQuestion(questions)
// console.log(data[1].answers[3].content)
console.log(JSON.stringify(data))