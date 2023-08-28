import product from "../models/product";
import productResponsitory from "../responsitories/ProductResponsitory.js"
class productService{
    constructor(){
        this.productResponsitory = new productResponsitory();
    }

    async store(dataproduct, userId){
        return await this.productResponsitory.store(dataproduct, userId)
    }

    async update(dataproduct, productId, authId){
        return await this.productResponsitory.update(
            productId,
            dataproduct,
            authId
        );
    }

    async show(id){
        return await this.productResponsitory.findById(id)
    }
    
    async destroy(id){
        return await this.productResponsitory.destroy(id)
    }

    async getListWithPaginate(limit=10, page=1, params={}){
        const {keyword} = params;
        console.log(keyword);
        let conditions={};
        if(keyword){
            conditions.$or=[
                {
                    name: new RegExp(`${keyword}`)
                },
                {
                    description: new RegExp(`${keyword}`,'i')
                }
            ]
        }
        return await this.productResponsitory.paginate(limit, page, conditions);
    }
}
export default productService;