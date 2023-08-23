import { responseJsonByStatus, responseSuccess, responseErrors } from "../../common/helper.js";
import Product from "../../models/product.js";
class productController{
    async store(req, res) {
        try {
            const data = {
                ...req.body
            }
            const product = await Product.create(data);

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
        // product.find()
        //     .then(
        //         product=>responseJsonByStatus(
        //             res,
        //             responseSuccess(product)
        //         )
        //     )
        //     .catch(
        //         e=> responseJsonByStatus(
        //             res,
        //             responseErrors(500, e.message)
        //         )
        //     )
        try{
            const {limit=10, page=1}=req.query;
            const [products, totalproducts]= await Promise.all([
                Product.find().limit(limit).skip(limit*(page-1)).limit(limit),  //skip: bỏ qua bao nhiêu products
                Product.count()
            ])
            // async/await: tác vụ đồng bộ
            // Promise: bất đồng bộ
            const totalPages= Math.ceil(totalproducts/page);
            return responseJsonByStatus(
                res,
                responseSuccess({
                    products,
                    total: totalproducts,
                    limit: +limit, // '+' đổi từ string snag number
                    page:+page,
                    pages: totalPages
                })
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message),
                500
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