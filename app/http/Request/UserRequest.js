import { baseRequest } from "./BaseRequest.js";
import { body, query } from 'express-validator';//->có hàm body -> truy xuất các fiel trong data gửi đi
import { USERS } from "../../../config/constant.js"; 

const validationsStoreOrUpdateUser = [
    body('name').custom( async  nameValue => {// method custom: kiểm tra dữ liệu
        if (typeof nameValue !== 'string') {
            throw new Error('Họ tên phải là kiểu chuỗi');
        }
        if (nameValue.length > 50) {
            throw new Error('Họ tên không được lớn hơn 50 ký tự');
        }
    }),
    body('phone').custom( async phoneValue => {
        if (typeof phoneValue !== 'string') {
            throw new Error('Số điện thoại phải là kiểu chuỗi')
        }

        if (phoneValue.length > 11) {
            throw new Error('Số điện thoại không được lớn hơn 11 ký tự')
        }

        if (phoneValue.length < 10) {
            throw new Error('Số điện thoại không được ít hơn 10 ký tự')
        }
    }),
    body('level').isIn(Object.values(USERS.level)).withMessage('Giá trị đã chọn trong trường phân quyền không hợp lệ.'),
    body('email').custom( async  emailValue => {
        if (typeof emailValue !== 'string') {
            throw new Error('Email phải là kiểu chuỗi');
        }
        if (emailValue.length > 50) {
            throw new Error('Email không được lớn hơn 50 ký tự');
        }
    })
        .isEmail()
        .withMessage('Email không đúng định dạng'),//withMessage: thực thi khi lệnh trước nó sai
];
//console.log(validationsStoreOrUpdateUser);
const validationsIndexUser=[
    query('limit').isNumeric().withMessage('limit phai la so'),
    query('page').isNumeric(),
    query('level').isIn(Object.values(USERS.level))
        .withMessage('giá trị đã chọn trong trường không hợp lệ').optional(), //isIn đầu vào là một array
    // query('limit').optional().isNumeric().withMessage('limit phai la so'),
    // query('page').optional().isNumeric()
    // optional() : dành cho các thuộc tính không bắt buộc, nếu có sẽ thực hiện các hàm tiếp theo,
    // không có thì bỏ qua
    //query('keyword').isString().optional(),
    query('keyword').optional().custom(async value =>{
        if (typeof value !=='string'){
            throw new Error('Keyword phải là kiểu chuỗi');
        }
    })
]

const validationsChangePassword =[
    body('oldPass').custom(async oldPassValue=>{
        // if (typeof oldPassValue !== 'string') {
        //     throw new Error('mật khẩu phải là kiểu chuỗi')
        // }

        // if (oldPassValue.length < 8) {
        //     throw new Error('mật khẩu không được dưới 8 ký tự')
        // }

    }),

    body('newPass').custom(async newPassValue=>{
        // if (typeof newPassValue !== 'string') {
        //     throw new Error('mật khẩu phải là kiểu chuỗi')
        // }

        // if (newPassValue.length < 8) {
        //     throw new Error('mật khẩu không được dưới 8 ký tự')
        // }

    })
]
export const validateChangePassword = baseRequest(validationsChangePassword);
export const validateStoreOrUpdateUser = baseRequest(validationsStoreOrUpdateUser);
export const validateIndexUser = baseRequest(validationsIndexUser);