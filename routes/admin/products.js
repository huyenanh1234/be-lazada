import express from 'express';
import ProductController from '../../app/http/controller/productController.js';
import authMiddleware from '../../app/http/Middlewares/AuthMiddleware.js';
import { validateIndexProduct, validateStoreOrUpdateProduct } from '../../app/http/Request/ProductRequest.js';
const productRouter=(app)=>{
    const router=express.Router();
    const productController = new ProductController();
    router.delete('/:productId', productController.destroy);
    router.use(authMiddleware);
    router.post('', validateStoreOrUpdateProduct, productController.store);
    router.get('', validateIndexProduct ,productController.index);
    router.put('/:productId', productController.update);
    router.get('/:productId', productController.show);
    app.use('/products',router);
}
export default productRouter;