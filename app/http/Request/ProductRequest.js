import { baseRequest } from "./BaseRequest.js";
import { body, query } from 'express-validator';//->có hàm body -> truy xuất các fiel trong data gửi đi


const validationsStoreOrUpdateProduct = [
    body('name').custom( async  nameValue => {// method custom: kiểm tra dữ liệu
        if (typeof nameValue !== 'string') {
            throw new Error(' Tên sản phẩm phải là kiểu chuỗi');
        }
        if (nameValue.length > 200) {
            throw new Error('Tên sản phẩm không được lớn hơn 200 ký tự');
        }
    }),
    body('price').custom( async priceValue => {
        if (typeof priceValue !== 'number') {
            throw new Error('Giá tiền phải là bội của 1000 đồng');
        }
        if (priceValue < 1000) {
            throw new Error('Giá tiền không được ít hơn 1000 đồng');
        }
    }),
    body('quantity').custom( async quantityValue => {
        if (typeof quantityValue !== 'number') {
            throw new Error('Số lượng sản phẩm phải là số');
        }
        if (quantityValue.length > 0) {
            throw new Error('Số lượng sản phẩm không được ít hơn 1000 đồng');
        }
    }),
    body('thumbnail').custom( async thumbnailValue => {
        if (typeof thumbnailValue !== 'string') {
            throw new Error('Ảnh mô tả SP phải là kiểu chữ');
        }
    }),

    
];

const validationsIndexProduct=[
    query('limit').isNumeric().withMessage('limit phai la so'),
    query('page').isNumeric()
]
export const validateStoreOrUpdateProduct = baseRequest(validationsStoreOrUpdateProduct);
export const validateIndexProduct = baseRequest(validationsIndexProduct);