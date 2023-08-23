import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { USERS } from "../../config/constant.js";
import { default as mongoosePaginate } from "mongoose-paginate";

const userSchema = new mongoose.Schema( // môm hình hóa diagram của  monggodb: model
    {
        name: {
            type: String,
            required: [true, 'Họ tên không được để trống'],
            maxLength: [50, 'Họ tên không được lớn hơn {MAXLENGTH} ký tự'],
        },
        email: {
            type: String,
            required: [true, 'Email không được để trống'],
            unique: [true, 'Email đã tồn tại'],
            maxLength: [50, 'Email không được lớn hơn {MAXLENGTH} ký tự'],
        },
        phone: {
            type: String,
            required: [true, 'Số điện thoại không được để trống'],
            unique: [true, 'Số điện thoại đã tồn tại'], // giá trị chỉ tồn tại duy nhất một
            maxLength: [11, 'Số điện thoại không được lớn hơn {MAXLENGTH} ký tự'],
            minLength: [10, 'Số điện thoại không được ít hơn {MINLENGTH} ký tự'],
        },
        avatar: {
            type: String,
            get:(avatar)=>{
                return "http://localhost:5050/avatars/" + avatar;
            }
        },
        password: {
            type: String,
            required: [true, 'Mật khẩu không được để trống'],
            maxLength: [255, 'Mật khẩu không được lớn hơn {MAXLENGTH} ký tự'],
            minLength: [6, 'Mật khẩu không được ít hơn {MINLENGTH} ký tự'],
        },
        level: {
            type: Number,
            required: true,
            enum: { // cho phép nhận giá trị đầu vào modify limit , quy định những giá trị nào được cho phép
                values: Object.values(USERS.level),// Oj.values: lấy các giá trị tạo thành mảng, Oj.key: lấy các key tạo thành mảng
                message: 'Giá trị đã chọn trong trường phân quyền không hợp lệ.'
            },
            default: USERS.level.user
        },
        is_confirm_account: {
            type: Number,
            required: true,
            enum: {
                values: Object.values(USERS.is_confirm_account),
            },
            default: USERS.is_confirm_account.false
        },
        created_by: {
            type: ObjectId, //ai tao ra document
            required: false,
        },
        updated_by: {
            type: ObjectId,
            required: false,
        },
        created_at: {  //thoi gian tao
            type: Date,
            required: false,
            timestamps: true
        },
        updated_at: {   //thoi gia update cuoi cung
            type: Date,
            required: false,
            timestamps: true
        },
        deleted_at: {  //thoi gian xoa
            type: Date,
            required: false
        },
    },
    {
        timestamps: {// tu dong set du lieu cho hai truong do
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        },
        toJSON: {getters: true}
    }
);
userSchema.plugin(mongoosePaginate);
export default mongoose.model("user", userSchema,"users");