import { parserJWTToken, responseErrors, responseJsonByStatus, responseSuccess } from "../../common/helper.js";
import User from "../../models/user.js";
const authMiddleware = async(req, res, next)=>{
    const responseToken = parserJWTToken(req.headers.authorization);
    if(!responseToken.success){
        return responseJsonByStatus(
            res,
            responseErrors(401, responseToken.errors??'')
        );
    }

    try {
        const userId = responseToken.payload.id;
        const user = await User.findById(userId);
        if(!user){
            return responseJsonByStatus(
                res,
                responseErrors(401, 'User khong ton tai'),
                401
            );
        };

        res.locals.authUser=user;
        next()
    } catch(e){
        return responseErrors(res, 500, e.message);
    }
}

export default authMiddleware;