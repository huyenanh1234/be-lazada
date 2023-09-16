import { responseJsonByStatus, responseSuccess, responseErrors } from "../../common/helper.js";
import categoryService from "../../services/categoryService.js";
class categoryController{
    static categoryService = new categoryService();
    async store(req, res){
        try{
            const data={
                ...req.body
            }
            const category = await categoryController.categoryService.store(
                data,
                res.locals.authUser._id
                );
            return responseJsonByStatus(
                res,
                responseSuccess(category)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message),
                500
            )
        }

    }

    async update(req, res){
        try{
            const {categoryId}= req.params;
            const data = { ...req.body};
            const categoryUpdated = await categoryController.categoryService.update(
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
                responseErrors(500, e.message),
                500
            )
        }
    }

    async show(req, res){
        try{
            const{categoryId} = req.params;
            const category = await categoryController.categoryService.show({
                _id:categoryId
            })
            return responseJsonByStatus(
                res,
                responseSuccess(category)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message),
                500
            )
        }
    }

    async detroy(req, res){
        try{
            const{categoryId} = req.params;
            const categoryDeleted = await categoryController.categoryService.destroy({
                _id:categoryId
            })
            if(categoryDeleted.deletedCount===0){
                return responseJsonByStatus(
                    res,
                    responseErrors(400,'xoa danh muc that bai'),
                    400
                )
            }
            return responseJsonByStatus(
                res,
                responseSuccess(true)
            )

        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message),
                500
            )
        }
    }

    async index(req, res){
        try{
            const {limit=10, page=1, name}=req.query;
            console.log(name);
            const categories= await categoryController.categoryService.getListWithPaginate(
                limit, 
                page, 
                {
                    name
                }
            );
            return responseJsonByStatus(
                res,
                responseSuccess(categories)
            )
        } catch(e){
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message),
                500
            )
        }
    }

}

export default categoryController;