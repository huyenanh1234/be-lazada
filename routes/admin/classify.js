import express from 'express';
import ClassifyController from '../../app/http/controller/classifyController';
import authMiddleware from '../../app/http/Middlewares/AuthMiddleware';
import { updateFilePostMiddleware } from '../../app/http/Middlewares/UpdateFilePostMiddleware';
const classifyRouter = (app)=>{
    const router=express.Router();
    const classifyController = new ClassifyController();
    router.use(authMiddleware);
    router.post('', updateFilePostMiddleware.any([
        {
            name: 'classify_value[][image]'
        }
    ]), classifyController.store);
    
    app.use('/classifies', router);

}

export default classifyRouter;