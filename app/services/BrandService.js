import brand from "../models/brand";
import BrandResponsitory from "../responsitories/BrandResponsitory";
class brandService{
    constructor(){
        this.brandResponsitory = new BrandResponsitory();
    }

    async findById(id){
        return await this.brandResponsitory.findById(id)
    }
    
    async store(databrand, userId){
        return await this.brandResponsitory.store(databrand, userId)
    }

    async update(databrand, brandId, authId){
        return await this.brandResponsitory.update(
            brandId,
            databrand,
            authId
        );
    }

    async show(id){
        return await this.brandResponsitory.findById(id)
    }
    
    async destroy(id){
        return await this.brandResponsitory.destroy(id)
    }

    async getListWithPaginate(limit=10, page=1, params={}){
        const {name} = params;
        let conditions={};
        if(name){
             conditions.name = new RegExp(`${name}`, 'i')
        }
        return await this.brandResponsitory.paginate(limit, page, conditions);
    }
}
export default brandService;