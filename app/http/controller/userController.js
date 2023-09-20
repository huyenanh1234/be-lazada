import express, { request } from "express";
import { responseJsonByStatus, responseSuccess, responseErrors } from "../../common/helper.js";
import User from "../../models/user.js";
import UserService from "../../services/UserService.js";
import { level } from "winston";

class userController{
    static userService = new UserService();
    async store(req, res) {
        try {
            return responseJsonByStatus(
                res,
                responseSuccess(
                    await userController.userService.store(
                        req.body,
                        res.locals.authUser._id
                    )
                )
            )
        } catch (e) {
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message),
                500
            )
        }
    }

    async update(req, res) {
        try{
            const { userId } = req.params;
            const data = { ...req.body };
            const userUpdated = await userController.userService.update(data, userId, res.locals.authUser._id)

            return responseJsonByStatus(
                res,
                responseSuccess(userUpdated)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message),
                500
            )
        }
    }
    async show(req, res){
        try{
            const userId=req.params;
            const user= await userController.userService.findById(userId.userId);
            if(!user){
                return responseJsonByStatus(
                    res,
                    responseErrors(400,'khong tim thay user can show'),
                    400
                )
            }
            
            return responseJsonByStatus(
                res,
                responseSuccess(user)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message),
                500
            )
        }
        
    }
    async index (req, res){
        try{
            const {limit=10, page=1, keyword="", level=""}=req.query;
            const users= await userController.userService.getListWithPaginate(
                limit, 
                page, 
                {
                    level,
                    keyword
                }
            );
            return responseJsonByStatus(
                res,
                responseSuccess(users)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message),
                500
            )
        }

    }
    async destroy(req,res){
        try{
            const id = req.params;
            const userId={
                _id: id.userId,
            };

            console.log(userId)
            if(await userController.userService.findById(userId)===null){
                return responseJsonByStatus(
                    res,
                    responseErrors(400,'khong tim thay user can xoa'),
                    400
                )
            }
            const userDeleted = await userController.userService.destroy(userId)

            if(userDeleted.deletedCount===0){
                return responseJsonByStatus(
                    res,
                    responseErrors(400,'xoa User that bai'),
                    400
                )
            }

            return responseJsonByStatus(
                res,
                responseSuccess(200, 'Xoa user thanh cong'),
                200
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message),
                500
            )
        }
    }
}

export default userController;