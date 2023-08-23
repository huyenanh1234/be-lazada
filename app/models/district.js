import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const districtSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required: [true, 'Tên không được để trống'],
            maxLength: [120,'Tên không được lớn hơn {MAXLENGTH} ký tự']
        },
        provice_id:{
            type: ObjectId,
        },
    }
)
export default mongoose.model("district", districtSchema, "districts");