import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const paymentSchema = new mongoose.Schema(
    {
        user_id:{
            type: ObjectId,
        },
        order_id:{
            type: ObjectId,
        },
        type:{
            type: Number,
        },
        status:{
            type: Number,
            required:[true, 'Trạng thái không được để trống'],        },
        note:{
            type: String,
        }
    }
)
export default mongoose.model("payment", paymentSchema, "payments");