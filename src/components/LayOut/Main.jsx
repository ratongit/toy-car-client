import { Outlet } from 'react-router-dom';
import Header from '../sherad/Header/Header';
import Footer from '../sherad/Footer/Footer';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;