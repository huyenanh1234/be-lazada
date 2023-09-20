class BaseResponsitory{
    constructor(model){
        this.setModel(model)
    }

    getModel(){
        return this.model;
    }

    setModel(model){
        this.model=model;
    }
    async findById(id){
        return this.getModel().findById(id)
    }
    async store(data, createdById= null){
        if(createdById){
            data.createdById = createdById;
        }
        return await this.getModel().create(data);
    }
    async update(data, id, updateById){
        console.log(data,'111')
        if(updateById){
            data.update_id = updateById;
        }
        const dataUpdate = await this.getModel().findByIdAndUpdate(
            id,
            data
        )
        return true;
    }
   
    async destroy(id){
        return await this.getModel().deleteOne(id)
    }
   
    async paginate(limit=10, page=1, conditions={}){
        const[data, total] = await Promise.all([
            this.getModel().find(conditions).skip(limit*(page-1)).limit(limit),
            this.getModel().count(conditions)
        ])
        const totalPages = Math.ceil(total/limit);
        return{
            data,
            total,
            limit: +limit,
            page: +page,
            pages:totalPages
        }
    }

    async find(conditions = {}) {
        return await this.getModel().find(conditions);
    }
}
export default BaseResponsitory;