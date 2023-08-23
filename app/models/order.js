import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const orderSchema = new mongoose.Schema(
    {
        user_id:{
            type: ObjectId,
        },
        total_price:{
            type: Number,
            required:[true, 'Tổng giá tiền không được để trống'],
            minLength:[1000,'Tổng giá tiền không được ít hơn {MINLENGTH} đồng'],
        },
        status:{
            type: Number,
            required:[true, 'Trạng thái không được để trống'],        },
        note:{
            type: String,
        }
    }
)
export default mongoose.model("order", orderSchema, "orders");