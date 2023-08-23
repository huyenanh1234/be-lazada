import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const reviewSchema = new mongoose.Schema(
    {
        product_id:{
            type: ObjectId,
            //required:[true, 'Product id không được để trống'],
        },
        user_id:{
            type: ObjectId,
            //required:[true, 'User id không được để trống'],
        },
        rate:{
            type: Number,
            required:[true, 'Rate không được để trống'],
            maxLength: [1, 'Rate không được lớn hơn {MAXLENGTH}'],
            minLength: [5, 'Rate không được ít hơn {MINLENGTH}'],
        },
        comment:{
            type: String,
        },
        img:{
            type: String,
        }
    }
)
export default mongoose.model("review", reviewSchema, "reviews");