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
<div className="mt-10">
<h1 className="mb-16 text-center text-yellow-200 text-2xl">Chack Out Toy-Car</h1>
            <Toy></Toy>
</div>

   </div>
    );
};

export default Home;