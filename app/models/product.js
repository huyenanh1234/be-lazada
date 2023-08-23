import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { default as mongoosePaginate} from "mongoose-paginate";

const productSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required: [true, 'Tên sản phẩm không được để trống'],
            maxLength: [200,'Tên sản phẩm không được lớn hơn {MAXLENGTH} ký tự']
        },
        price:{
            type: Number,
            required:[true, 'Giá tiền không được để trống'],
            minLength:[1000,'Giá không được ít hơn {MINLENGTH} đồng'],
        },
        quantity:{
            type: Number,
            required:[true, 'Số lượng không được để trống'],
            minLength:[0, 'Số lượng sản phẩm không được ít hơn {MINLENGTH}']
        },
        discount:{
            type: Number
        },
        categori_id:{
            type: ObjectId,
            required: false
        },
        brand_id:{
            type: ObjectId,
            required: false
        },
        province_id:{
            type: ObjectId,
            required: false
        },
        thumbnail:{
            type: String,
            required: [true, 'Ảnh minh họa SP không được để trống'],
        },
        description:{
            type: String,
        },
        status:{
            type: String,
        }

    }
);

productSchema.plugin(mongoosePaginate);
export default mongoose.model("product", productSchema, "products");
