import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const productImageSchema = new mongoose.Schema(
    {
        product_id:{
            type: ObjectId,
        },
        url:{
            type: String,
        },
    }
)
export default mongoose.model("productImage", productImageSchema, "productImages");