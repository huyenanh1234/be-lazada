import { responseJsonByStatus, responseSuccess, responseErrors } from "../../common/helper.js";
import Category from "../../models/category.js";
class CategoryController{
    async store(req, res){
        try{
            const data={
                ...req.body
            }
            const category = await Category.create(data);
            return responseJsonByStatus(
                res,
                responseSuccess(category)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message)
            )
        }

    }

    async update(req, res){
        try{
            const {categoryId}= req.params;
            const data = { ...req.body};
            const categoryUpdated = await Category.findByIdAndUpdate(
                categoryId,
                data
            )
            return responseJsonByStatus(
                res,
                responseSuccess(categoryUpdated)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message)
            )
        }
    }

    async show(req, res){
        try{
            const{categoryId} = req.params;
            const category = await Category.findOne({
                _id:categoryId
            })
            return responseJsonByStatus(
                res,
                responseSuccess(category)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message)
            )
        }
    }

    async detroy(req, res){
        try{
            const{categoryId} = req.params;
            const categoryDeleted = await Category.deleteOne({
                _id:categoryId
            })
            if(categoryDeleted.deletedCount===0){
                return responseJsonByStatus(
                    res,
                    responseErrors(400,'xoa danh muc that bai')
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

    async index(req, res){
        try{
            const products = await Category.find();
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

}

export default CategoryController;