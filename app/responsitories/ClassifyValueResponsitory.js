import BaseResponsitory from "./BaseResponsitory.js";
import classifyValue from "../models/classifyValue.js";
class ClassifyValueResponsitory extends BaseResponsitory{
    constructor(){
        super(classifyValue);
    }
}
export default ClassifyValueResponsitory;
