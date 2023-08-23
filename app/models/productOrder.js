import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const productOrderSchema = new mongoose.Schema(
    {
        product_id:{
            type: ObjectId,
        },
        order_id:{
            type:ObjectId,
        },
        quantity:{
            type: Number,
            required:[true, 'Số lượng không được để trống'],
            minLength:[0, 'Số lượng sản phẩm không được ít hơn {MINLENGTH}']
        },
        price:{
            type: Number,
            required:[true, 'Giá tiền không được để trống'],
            minLength:[1000,'Giá không được ít hơn {MINLENGTH} đồng'],
        }
    }
)
export default mongoose.model("productOrder", productOrderSchema, "productOrders");