import express from "express";
import UserController from "../../app/http/controller/userController.js";
import { validateStoreOrUpdateUser } from "../../app/http/Request/UserRequest.js";

const userRouter=(app)=>{
    const router=express.Router();
    const userController = new UserController();
    router.use(authMiddleware);
    router.post('', validateStoreOrUpdateUser, userController.store);
    app.use('/users',router);
}
export default userRouter;