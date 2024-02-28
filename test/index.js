const { hanldeQuestion } = require("../dist")

const questions = [
    {
        "id": 208480,
        "title": null,
        "title_ltvc": null,
        "content": {
            "kieu_cau_hoi": "GV_001",
            "do_kho": "Vận dụng",
            "voice": "",
            "format": "",
            "random": 1,
            "noi_dung_cau_hoi": {
                "noi_dung": "<h3><strong>Xe thuần điện, xe hybrid v&agrave; xe hybrid sạc điện c&oacute; g&igrave; kh&aacute;c nhau?</strong></h3>\n\n<p>Xe điện&nbsp;đang l&agrave; một trong những từ kh&oacute;a &quot;hot&quot; hiện nay. Nếu bạn cũng c&oacute; &yacute; định g&oacute;p phần bảo vệ m&ocirc;i trường bằng việc chuyển sang d&ugrave;ng xe điện th&igrave; đừng nghĩ rằng xe điện chỉ c&oacute; 1 loại m&agrave; hiện nay d&ograve;ng sản phẩm n&agrave;y c&oacute; rất nhiều lựa chọn, từ c&ocirc;ng nghệ cho tới chủng loại xe.</p>\n\n<p><img alt=\"\" src=\"https://cdnphoto.dantri.com.vn/qj1XtMnrxjzPcI24S6kKyDJY8pk=/2024/02/19/xe-dien-xe-xanggetty-edited-1708309095218.jpeg\" style=\"height:200px; width:300px\" /></p>\n\n<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msqrt><mfrac><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow><mrow><mn>12</mn><mi>c</mi></mrow></mfrac></msqrt><mo>&#160;</mo><mo>=</mo><mo>&#160;</mo><msup><mn>69</mn><mn>3</mn></msup></math></p>\n"
            },
            "ds_cau_tra_loi": [
                {
                    "type": "",
                    "isChecked": false,
                    "id_cau_tra_loi": "A",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "Xe đạp"
                    }
                },
                {
                    "type": "",
                    "isChecked": true,
                    "id_cau_tra_loi": "B",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "Xe Lu"
                    }
                },
                {
                    "isChecked": false,
                    "id_cau_tra_loi": "C",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "Xe Bò"
                    }
                },
                {
                    "isChecked": false,
                    "id_cau_tra_loi": "D",
                    "noi_dung_cau_tra_loi": {
                        "noi_dung": "Xe máy"
                    }
                }
            ],
            "dap_an": [
                {
                    "id_cau_tra_loi": "B",
                    "noi_dung_dap_an": "Xe Lu"
                }
            ],
            "giai_thich_dap_an": {
                "noi_dung": "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:500px\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>Đ&aacute;p &aacute;n</td>\n\t\t\t<td>Kết quả</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>A</td>\n\t\t\t<td>Đ&uacute;ng</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>B</td>\n\t\t\t<td>Sai</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>Xe điện chỉ c&oacute; 1 loại m&agrave; hiện nay d&ograve;ng sản phẩm n&agrave;y c&oacute; rất nhiều lựa chọn, từ c&ocirc;ng nghệ cho tới chủng loại xe.</p>\n"
            },
            "ghi_chu": null,
            "difficult_level": 0,
            "ma_cau_hoi": "CB_TA_1_4577_123081"
        },
        "voice_id": null,
        "coin": null,
        "difficult_level": 0,
        "code": "",
        "parent_code": "",
        "admin_approve": 1,
        "random": true,
        "format": ""
    }
]

const data = hanldeQuestion(questions)
// console.log(data[1].answers[3].content)
console.log(data)