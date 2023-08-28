import { baseRequest } from "./BaseRequest.js";
import {body} from "express-validator";

const validationStoreOrUpdatebrand = [
    body('name').custom(async nameValue=>{
        console.log(111);
        if(typeof nameValue !== 'string'){
            throw new Error('Tên thuong hieu phải là kiểu ký tự');
        }
        if (nameValue.length>100){
            throw new Error('Tên thuong hieu dài không quá 100 ký tự');
        }
    })

]

export const validateStoreOrUpdatebrand = baseRequest(validationStoreOrUpdatebrand);