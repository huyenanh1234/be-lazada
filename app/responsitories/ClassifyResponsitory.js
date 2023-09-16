import BaseResponsitory from "./BaseResponsitory.js";
import classify from "../models/classify.js";
class ClassifyResponsitory extends BaseResponsitory{
    constructor(){
        super(classify);
    }
}
export default ClassifyResponsitory;
