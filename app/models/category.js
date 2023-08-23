import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const categorySchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'Tên danh mục không được để trống'],
            maxLength: [100, 'Tên danh mục không được lớn hơn {MAXLENGTH} ký tự'],
        },
        description:{
            type: String,
        },
        parent_id:{
            type: ObjectId,
        }
    }
)
export default mongoose.model("category", categorySchema, "categories");