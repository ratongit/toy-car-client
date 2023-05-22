import Carousel from "./Carousel";
import '../home/Home.css'
import Toy from "../AllToys/Toy";
import Company from "./company/Company";
const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
<Company></Company>
            <Toy></Toy>

   </div>
    );
};

export default Home;