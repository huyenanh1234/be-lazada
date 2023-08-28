import BaseResponsitory from "./BaseResponsitory.js";
import Category from "../models/category.js";
class CategoryResponsitory extends BaseResponsitory{
    constructor(){
        super(Category);
    }
}
export default CategoryResponsitory;

//controller: tiếp nhận các data gửi đến và response cho người dùng
//Service: chứa các logic chính của các chức năng
// responsitory: quán lý các câu truy vấn làm việc với DB
