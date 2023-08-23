import express, { request } from "express";
import { hashHmacString, responseJsonByStatus, responseSuccess, responseErrors } from "../../common/helper.js";
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
                responseErrors(500, e.message)
            )
        }
    }

    async update(req, res) {
        const { userId } = req.params;
        const data = { ...req.body };
        const userUpdated = await userController.userService.update(data, userId, res.locals.authUser._id)

        return responseJsonByStatus(
            res,
            responseSuccess(userUpdated)
        )
    }
    async show(req, res){
        const {userId}=req.params;
        User.findById(userId)
            .then(
                user=>responseJsonByStatus(
                    res,
                    responseSuccess(user)
                )
            )
            .catch(
                e=> responseJsonByStatus(
                    res,
                    responseErrors(500, e.message)
                )
            )
    }
    async index (req, res){
        try{
            const {limit=10, page=1, keyword, level}=req.query;
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
            const{userId} = req.params;
            const userDeleted = await User.deleteOne({
                _id:userId
            })
            if(userDeleted.deletedCount===0){
                return responseJsonByStatus(
                    res,
                    responseErrors(400,'xoa User that bai')
                )
            }
            return responseJsonByStatus(
                res,
                responseSuccess(true)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message)
            )
        }
    }
}

export default userController;