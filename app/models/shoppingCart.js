import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const shoppingCartSchema = new mongoose.Schema(
    {
        product_id:{
            type: ObjectId,
        },
        quantity:{
            type: Number,
            required:[true, 'Số lượng không được để trống'],
            minLength:[0, 'Số lượng sản phẩm không được ít hơn {MINLENGTH}']
        },
    }
)
export default mongoose.model("shoppingCart", shoppingCartSchema, "shoppingCarts");