import authRouter from "./admin/auth.js";
import brandRouter from "./admin/brand.js";
import categoryRouter from "./admin/category.js";
import classifyRouter from "./admin/classify.js";
import productRouter from "./admin/products.js";
import profileRouter from "./admin/profile.js";
import userRouter from "./admin/users.js";
const routers=(app)=>{
    userRouter(app);
    authRouter(app);
    productRouter(app);
    categoryRouter(app);
    profileRouter(app);
    brandRouter(app);
    classifyRouter(app);
}

export default routers;