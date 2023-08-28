import BaseResponsitory from "./BaseResponsitory.js";
import Product from "../models/product.js";
class productResponsitory extends BaseResponsitory{
    constructor(){
        super(Product);
    }
}
export default productResponsitory;
