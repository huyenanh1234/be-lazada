import { responseJsonByStatus, responseSuccess, responseErrors } from "../../common/helper.js";
import userService from "../../services/UserService.js";
class profileController{
    static userService = new userService();
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