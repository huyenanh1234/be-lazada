import BaseResponsitory from "./BaseResponsitory";
import User from "../models/user.js";
class UserResponsitory extends BaseResponsitory{
    constructor(){
        super(User);
    }

    getUserByLevel(){

    }

    findByPhone(){

    }
}

export default UserResponsitory;
