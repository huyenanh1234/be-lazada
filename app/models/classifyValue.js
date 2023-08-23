import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const classifyValueSchema = new mongoose.Schema(
    {
        classify_id:{
            type: ObjectId,
        },
        image:{
            type: String,
        },
        value:{
            type: String,
        }
    }
)
export default mongoose.model("classifyValue", classifyValueSchema, "classifyValues");