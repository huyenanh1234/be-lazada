import categoryResponsitory from "../responsitories/CategoryResponsitory";
class categoryService{
    constructor(){
        this.categoryResponsitory = new categoryResponsitory();
    }

    async findById(id){
        return await this.categoryResponsitory.findById(id)
    }
    
    async store(dataCategory, userId){
        return await this.categoryResponsitory.store(dataCategory, userId)
    }

    async update(dataCategory, categoryId, authId){
        return await this.categoryResponsitory.update(
            categoryId,
            dataCategory,
            authId
        );
    }

    async show(id){
        return await this.categoryResponsitory.findById(id)
    }
    
    async destroy(id){
        return await this.categoryResponsitory.destroy(id)
    }

    async getListWithPaginate(limit=10, page=1, params={}){
        const {name} = params;
        let conditions={};
        if(name){
             conditions.name = new RegExp(`${name}`, 'i')
        }
        return await this.categoryResponsitory.paginate(limit, page, conditions);
    }
    async getAll(conditions = {}) {
        return await this.categoryResponsitory.find(conditions);
    }
}
export default categoryService;