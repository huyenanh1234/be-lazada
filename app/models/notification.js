import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const notificationSchema = new mongoose.Schema(
    {
        user_id:{
            type: ObjectId,
            //required:[true, 'User id không được để trống'],
        },
        icon:{
            type: String,
        },
        content:{
            type: String,
            required:[true, ' Content không được để trống'],

        },
        status:{
            type: Number,
            required:[true, 'Status không được để trống'],

        },
        type:{
            type: Number,
            required:[true, 'Type không được để trống'],

        },
        redirect_url:{
            type: String,
        },
    }
)
export default mongoose.model("notification", notificationSchema, "notifications");