import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const brandSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required: [true, 'Tên thuong hieu không được để trống'],
            maxLength: [200,'Tên thuong hieu không được lớn hơn {MAXLENGTH} ký tự']
        },
        description:{
            type: String,
        },
    }
)
export default mongoose.model("brand", brandSchema, "brands");