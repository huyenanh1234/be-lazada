import BaseResponsitory from "./BaseResponsitory";
import User from "../models/user.js";
class UserResponsitory extends BaseResponsitory{
    constructor(){
        super(User);
    }

    getUserByLevel(){

    }

    async findByPhone(phone){
        return await User.findOne({phone})
    }

    async findById(authId){
        return await User.findById(authId)
    }
    
}

export default UserResponsitory;

//controller: tiếp nhận các data gửi đến và response cho người dùng
//Service: chứa các logic chính của các chức năng
// responsitory: quán lý các câu truy vấn làm việc với DB
