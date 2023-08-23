import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const brandSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required: [true, 'Tên sản phẩm không được để trống'],
            maxLength: [200,'Tên sản phẩm không được lớn hơn {MAXLENGTH} ký tự']
        },
        description:{
            type: String,
        },
    }
)
export default mongoose.model("brand", brandSchema, "brands");