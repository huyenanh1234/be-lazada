import express from 'express';
import authMiddleware from '../../app/http/Middlewares/AuthMiddleware.js';
import { validateStoreOrUpdatebrand } from '../../app/http/Request/BrandRequest.js';
import BrandController from '../../app/http/controller/brandController.js';
const brandRouter=(app)=>{
    const router=express.Router();
    const brandController = new BrandController();
    router.use(authMiddleware);
    router.post('', validateStoreOrUpdatebrand, brandController.store);
    router.put('/:brandId', brandController.update);                                                                                                                                      
    router.get('/:brandId', brandController.show);
    router.delete('/:brandId', brandController.detroy);
    router.get('' ,brandController.index);
    app.use('/brands', router);
}
export default brandRouter;