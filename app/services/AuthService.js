import UserResponsitory from "../responsitories/UserResponsitory";

class authService{
    constructor(){
        this.UserResponsitory = new UserResponsitory();
    } 

    async findByPhone(phone){
        return await this.UserResponsitory.findByPhone(phone)
    }

}

export default authService;