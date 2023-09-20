import ClassifyResponsitory from "../responsitories/ClassifyResponsitory";
class classifyServive{
    constructor(){
        this.ClassifyResponsitory = new ClassifyResponsitory();
    }

    async store(data, userId=null){
        const dataClassify = {
            product_id: data.product_id,
            name: data.name,
            description: data.description
        }
        return await this.ClassifyResponsitory.store(dataClassify, userId)
    }
}

export default classifyServive;