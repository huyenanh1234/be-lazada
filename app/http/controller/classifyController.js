import { responseJsonByStatus, responseSuccess, responseErrors } from "../../common/helper.js";
import ClassifyServive from "../../services/ClassifyService.js";
import ClassifyValueServive from "../../services/ClassifyValueService.js";
class classifyController{
    static classifyServive = new ClassifyServive();
    static classifyValueService = new ClassifyValueServive();
    async store(req,res){
        try{
            const data = {
                ... req.body
            }
            const media = {
                ...req.files
            }
            
            console.log('data:', data);

            const classify = await classifyController.classifyServive.store(
                data
            )
            const classifyValuesCreated = await classifyController.classifyValueService.storeAll(
                data.classify_value, media, classify._id
            )
            return responseJsonByStatus(
                res,
                responseSuccess({
                    ...classify.toObject(),
                    classify_values: classifyValuesCreated
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
}

export default classifyController;