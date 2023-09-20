import express from 'express';
import CategoryController from '../../app/http/controller/categoryController.js';
import authMiddleware from '../../app/http/Middlewares/AuthMiddleware.js';
import { validateStoreOrUpdateCategory } from '../../app/http/Request/categoryRequest.js';
const categoryRouter=(app)=>{
    const router=express.Router();
    const categoryController = new CategoryController();
    router.use(authMiddleware);
    router.post('', validateStoreOrUpdateCategory, categoryController.store);
<<<<<<< HEAD
    router.put('/:categoryId', categoryController.update);    
    router.get('/all',categoryController.getAll);                                                                                                                                  
    router.post('/:categoryId', categoryController.show);
=======
    router.put('/:categoryId', categoryController.update);                                                                                                                                      
    router.get('/:categoryId', categoryController.show);
>>>>>>> 9c19a59e24a96a05315b649c807fe3e5374649af
    router.delete('/:categoryId', categoryController.detroy);
    router.get('' ,categoryController.index);
    app.use('/categories', router);
}
export default categoryRouter;