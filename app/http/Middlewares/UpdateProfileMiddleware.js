import multer from "multer";// đọc req có content type là form data và xử lý các file
import path from 'path';
import { STORAGE_PATHS } from "../../../config/constant.js";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(STORAGE_PATHS.uploadAvatarUser));
    },
    filename : function(req, file, cb){
        const uniqueSuffix = Date.now() + '-'+Math.round(Math.random()*1E9);
        cb(null, uniqueSuffix+'-'+ file.originalname);

    },
})

export const updateProfileMiddleware=multer({storage: storage});