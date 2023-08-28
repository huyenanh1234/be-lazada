import { responseJsonByStatus, responseSuccess, responseErrors } from "../../common/helper.js";
import Product from "../../models/product.js";
import ProductService from "../../services/ProductService.js";
class productController{
    static productService = new ProductService();
    async store(req, res) {
        try {
            const data = {
                ...req.body
            }
            const product = await productController.productService.store(
                data,
                res.locals.authUser._id
            );

            return responseJsonByStatus(
                res,
                responseSuccess(product)
            )
        } catch (e) {
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message)
            )
        }
    }

    async update(req, res) {
        const { productId } = req.params;
        const data = { ...req.body };
        const productUpdated = await Product.findByIdAndUpdate(
            productId,
            data
        )

        return responseJsonByStatus(
            res,
            responseSuccess(data)
        )
    }
    async show(req, res){
        const {productId}=req.params;
        Product.findById(productId)
            .then(
                product=>responseJsonByStatus(
                    res,
                    responseSuccess(product)
                )
            )
            .catch(
                e=> responseJsonByStatus(
                    res,
                    responseErrors(500, e.message)
                )
            )
    }
    async index (req, res){
        try{
            const {limit=10, page=1, keyword}=req.query;
            console.log(keyword);
            const products= await productController.productService.getListWithPaginate(
                limit, 
                page, 
                {
                    keyword,
                }
            );
            return responseJsonByStatus(
                res,
                responseSuccess(products)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message)
            )
        }

    }
    async destroy(req,res){
        try{
            const{productId} = req.params;
            const productDeleted = await Product.deleteOne({
                _id:productId
            })
            if(productDeleted.deletedCount===0){
                return responseJsonByStatus(
                    res,
                    responseErrors(400,'xoa product that bai')
                )
            }
            return responseJsonByStatus(
                res,
                responseSuccess(true)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message)
            )
        }
    }
}
export default productController;