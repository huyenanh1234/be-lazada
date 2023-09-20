import { baseRequest } from "./BaseRequest.js";
import {body} from "express-validator";

const validationStoreOrUpdateClassyfyValue = [
    body('name').custom(async nameValue=>{
        if(typeof nameValue !== 'string'){
            throw new Error('Tên danh mục phải là kiểu ký tự');
        }
        if (nameValue.length>100){
            throw new Error('Tên danh mục dài không quá 100 ký tự');
        }
    })

]

export const validateStoreOrUpdateClassyfyValue = baseRequest(validationStoreOrUpdateClassyfyValue);