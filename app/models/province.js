import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const proviceSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required: [true, 'Tên không được để trống'],
            maxLength: [120,'Tên không được lớn hơn {MAXLENGTH} ký tự']
        },
    }
)
export default mongoose.model("provice", proviceSchema, "provices");