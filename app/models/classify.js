import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const classifySchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'Tên phân loại không được để trống'],
            maxLength: [100, 'Tên phân loại không được lớn hơn {MAXLENGTH} ký tự'],
        },
        product_id:{
            type: ObjectId,
        },
        description:{
            type: String,
        }
    }
)
export default mongoose.model("classify", classifySchema, "classifies");