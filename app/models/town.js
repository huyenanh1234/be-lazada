import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const townSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required: [true, 'Tên không được để trống'],
            maxLength: [120,'Tên không được lớn hơn {MAXLENGTH} ký tự']
        },
        district_id:{
            type: ObjectId,
        },
    }
)
export default mongoose.model("town", townSchema, "towns");