import { baseRequest } from "./BaseRequest.js";
import {body} from "express-validator";

const validationStoreOrUpdateClassyfy = [
    // body('name').custom(async nameValue=>{
    //     if(typeof nameValue !== 'string'){
    //         throw new Error('PL phải là kiểu ký tự');
    //     }
    //     if (nameValue.length>100){
    //         throw new Error('PL dài không quá 100 ký tự');
    //     }
    // })

]

export const validateStoreOrUpdateClassyfy = baseRequest(validationStoreOrUpdateClassyfy);