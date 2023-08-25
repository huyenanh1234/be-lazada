import { responseJsonByStatus, responseSuccess, responseErrors } from "../../common/helper.js";
import userService from "../../services/UserService.js";
import { hashHmacString } from "../../common/helper.js";
class profileController{
    static userService = new userService();

    async changePassword(req,res){
        try{
            const oldPass = req.body.oldPass;
            const newPass = req.body.newPass;

            const user = await profileController.userService.findById(res.locals.authUser._id)
            if (user.password !== hashHmacString(oldPass)) {
                return responseJsonByStatus(
                    res, 
                    responseErrors(401,'Pass cũ khong chinh xac'),
                    401
                );
            }
            return responseJsonByStatus(
                res,
                responseSuccess(await profileController.userService.changePassword(
                    newPass,
                    user,
                ))
            )

        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message)
            )
        }
    }

    async show (req, res){
        try{
            return responseJsonByStatus(
                res,
                responseSuccess(res.locals.authUser)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message)
            )
        }
    }

    async update (req, res){
        try{
            const avatar = req.file.filename;
            const name = req.body.name;
            const dataUpdate={};
            if (avatar){
                dataUpdate.avatar = avatar;
            }

            if (name){
                dataUpdate.name = name;
            }

            return responseJsonByStatus(
                res,
                responseSuccess(
                    await profileController.userService.update(
                        dataUpdate,
                        res.locals.authUser._id
                    )
                )
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message)
            )
        }
    }
}

export default profileController;