import { responseJsonByStatus, responseSuccess, responseErrors } from "../../common/helper.js";
import brand from "../../models/brand.js";
import brandService from "../../services/BrandService.js";
class brandController{
    static brandService = new brandService();
    
    async store(req, res){
        console.log(1);
        try{
            const data={
                ...req.body
            }
            console.log(data);
            const brand = await brandController.brandService.store(
                data,
                res.locals.authUser._id
                );
            return responseJsonByStatus(
                res,
                responseSuccess(brand)
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
            const {brandId}= req.params;
            const data = { ...req.body};
            const brandUpdated = await brandController.brandService.update(
                brandId,
                data
            )
            return responseJsonByStatus(
                res,
                responseSuccess(brandUpdated)
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
            const{brandId} = req.params;
            const brand = await brandController.brandService.show({
                _id:brandId
            })
            return responseJsonByStatus(
                res,
                responseSuccess(brand)
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
            const{brandId} = req.params;
            const brandDeleted = await brandController.brandService.destroy({
                _id:brandId
            })
            if(brandDeleted.deletedCount===0){
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
            const {limit=10, page=1, name}=req.query;
            const categories= await brandController.brandService.getListWithPaginate(
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
                responseErrors(500, e.message)
            )
        }
    }

    async getAll(req, res) {
        try{
            const brands = await brandController.brandService.getAll();
            return responseJsonByStatus(
                res,
                responseSuccess(brands)
            )
        } catch (e) {
            return responseJsonByStatus(
                res,
                responseErrors(500, e.message),
                500
            )
        }
    }
}

export default brandController;