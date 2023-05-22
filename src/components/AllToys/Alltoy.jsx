import usetitle from "../hooks/UseTitle";
import Toy from "./Toy";

const Alltoy = () => {
   usetitle('All-Toy')
    return (
        <div className="mt-10">
            
            <Toy></Toy>
        </div>
    );
};

export default Alltoy;