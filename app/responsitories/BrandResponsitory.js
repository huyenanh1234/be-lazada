import BaseResponsitory from "./BaseResponsitory.js";
import brand from "../models/brand.js";
class BrandResponsitory extends BaseResponsitory{
    constructor(){
        super(brand);
    }
}
export default BrandResponsitory;

//controller: tiếp nhận các data gửi đến và response cho người dùng
//Service: chứa các logic chính của các chức năng
// responsitory: quán lý các câu truy vấn làm việc với DB
