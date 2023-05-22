import Carousel from "./Carousel";
import '../home/Home.css'
import Toy from "../AllToys/Toy";
import Company from "./company/Company";
import usetitle from "../hooks/UseTitle";
import Category from "../category/Category";
import Gellery from "../gallery/Gellery";
const Home = () => {
    usetitle('Home')
    return (
        <div>
            <Carousel></Carousel>
<div>
    <h2 className="text-3xl font-semibold text-center  text-rose-300 "> Shop By catagory</h2>
</div>
<Category></Category>
<Gellery></Gellery>
<Company></Company>
            <Toy></Toy>

   </div>
    );
};

export default Home;