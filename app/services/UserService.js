import { hashHmacString } from "../common/helper";
import User from "../models/user";
import userResponsitory from "../responsitories/UserResponsitory.js";
class userService{
    constructor(){
        this.userResponsitory = new userResponsitory();
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
            userId,
            dataUser,
            authUserId
        );
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
        // if (level){
        //     filters.level = level;
        // }

        // if(keyword){
        //     filters.$or=[
        //         {
        //             email: new RegExp(`${keyword}`)
        //         },
        //         {
        //             name : new RegExp(`${keyword}`)
        //         }
        //     ]
          
        // }

        // const [users, totalUsers]= await Promise.all([
        //     User.find(filters).skip(limit*(page-1)).limit(limit),
        //     User.count(filters)
        // ]);
        // console.log(filters);
        // const totalPages = Math.ceil(totalUsers/page);
        // return {
        //     users,
        //     total: totalUsers,
        //     limit: +limit,
        //     page: +page,
        //     pages: totalPages
        // }
    }
}
export default userService;