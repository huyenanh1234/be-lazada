import express from "express";
import UserController from "../../app/http/controller/userController.js";
import { validateStoreOrUpdateUser, validateIndexUser } from "../../app/http/Request/UserRequest.js";
import authMiddleware from "../../app/http/Middlewares/AuthMiddleware.js";
const userRouter=(app)=>{
    const router=express.Router();
    const userController = new UserController();
    router.delete('/:userId', userController.destroy);
    router.use(authMiddleware);
    router.post('', validateStoreOrUpdateUser, userController.store);
    router.get('', validateIndexUser ,userController.index);
    router.put('/:userId', userController.update);
    router.get('/:userId', userController.show);

    app.use('/users',router);
}
export default userRouter;