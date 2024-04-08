const { hanldeQuestion } = require("../dist")

const questions = [
    {
        "id": 208772,
        "title": null,
        "title_ltvc": null,
        "content": {
            "kieu_cau_hoi": "GV_001",
            "do_kho": "Nhận biết",
            "noi_dung_cau_hoi": {
                "noi_dung": "<p><strong>Câu 1: [NB] </strong>Trung điểm các cạnh của một tứ diện đều là các đỉnh của một hình</p>"
            },
            "ds_cau_tra_loi": [
                {
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "<div><strong>A. </strong>bát diện đều.</div>"
                    }
                },
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "<div><strong>B. </strong>chóp đều.</div>"
                    }
                },
                {
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "<div><strong>C.</strong> lăng trụ đều</div>"
                    }
                },
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "<div><u style=\"background-color:yellow\"><strong>D.</strong></u> lục giác đều</div>"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "D",
                    "noi_dung_dap_an": "<div><u style=\"background-color:yellow\"><strong>D.</strong></u> lục giác đều</div>"
                }
            ],
            "giai_thich_dap_an": [
                {
                    "noi_dung": "<p>Giải thích: Chọn đáp án D là chính xác</p>"
                }
            ]
        },
        "voice_id": null,
        "coin": null,
        "difficult_level": 1,
        "code": "",
        "parent_code": "",
        "admin_approve": 1,
        "random": false,
        "format": ""
    }
]

const data = hanldeQuestion(questions)
// console.log(data[1].answers[3].content)
console.log(JSON.stringify(data))