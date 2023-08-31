import { hashHmacString } from "../common/helper";
import User from "../models/user";
import userResponsitory from "../responsitories/UserResponsitory.js";
class userService{
    constructor(){
        this.userResponsitory = new userResponsitory();
    }

    async findByPhone(phone){
        return await this.userResponsitory.findByPhone(phone);
    }
    async findById(authId){
        return await this.userResponsitory.findById(authId)
    }
    async changePassword(newPass, user){
        const passUpdate={};
        if(newPass){
            passUpdate.password=hashHmacString(newPass);
        }

        return await this.userResponsitory.update(passUpdate,user.id,user.id);
    }
    
    async store(dataUser, userId){
        if(!dataUser.password){
            dataUser.password = hashHmacString('12345678');
        } else {
            dataUser.password = hashHmacString(dataUser.password);

        }
        return await this.userResponsitory.store(dataUser, userId);
    }

    async update(dataUser, userId, authUserId){
        return await this.userResponsitory.update(
            dataUser,
            userId,
            authUserId
        );
    }
    
    async destroy(id){
        return await this.userResponsitory.destroy(id)
    }

    async getListWithPaginate(limit=10, page=1, params={}){
        const {level, keyword} = params;
        let conditions={};
        if (level){
            conditions.level = level
        }

        if(keyword){
            conditions.$or=[
                {
                    name: new RegExp(`${keyword}`)
                },
                {
                    email: new RegExp(`${keyword}`)
                }
            ]
        }
        return await this.userResponsitory.paginate(limit, page, conditions);
    }
}
export default userService;