import ClassifyValueResponsitory from "../responsitories/ClassifyValueResponsitory";
class classifyValueServive{
    constructor(){
        this.ClassifyValueResponsitory = new ClassifyValueResponsitory();
    }

    async storeAll(data, medias, classify_id ){
        
        const classifyValues = data.map(
            (value, index) => {
                return {
                    ...value,
                    classify_id: classify_id,
                    image: medias[index].filename
                }
            }
        );


        console.log("classifyValues:" , classifyValues);
        return await this.ClassifyValueResponsitory.storeAll(classifyValues)
    }
}

export default classifyValueServive;