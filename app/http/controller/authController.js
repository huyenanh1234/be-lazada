// model: mô hinhf hoas CacheStorage
// định nghia cac funtion handeler of api
import User from "../../models/user.js";
import {generateJWTToken, hashHmacString, 
    responseSuccess, responseErrors, 
    responseJsonByStatus} from "../../common/helper.js";

class AuthController {
    async login(req, res) {
        const {phone, password} = req.body;
        const user = await User.findOne({
            phone
        })

        if (!user) {
            return responseJsonByStatus(
                res, 
                responseErrors(401,'User khong ton tai'),
                401
            );
        }

        if (user.password !== hashHmacString(password)) {
            return responseJsonByStatus(
                res, 
                responseErrors(401,'Pass khong chinh xac'),
                401
            );
        }
        // res.json({
        //     user_token:generateJWTToken(user._id)
        // })

        return responseJsonByStatus(
            res,
            responseSuccess(
                {
                    user_token: generateJWTToken(user.id)
                }
            ),
        )
    }
}

export default AuthController;