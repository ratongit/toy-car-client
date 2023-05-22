import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import BuyToy from "../BuyToy/BuyToy";
import MyToy from "../MyToy/MyToy";
import Category from "../category/Category";
import Alltoy from "../AllToys/Alltoy";
import PrivateRoutes from "./PrivateRoutes";
import LoginPrivate from "../login/LoginPrivete";
import NotFound from "../404/NotFound";
import Blog from "../blog/Blog";
const Router  = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:
            <LoginPrivate>

              <Login></Login>
            </LoginPrivate>
        },
        {
          path:'/register',
          element:
          <LoginPrivate>
          <Register></Register>
          </LoginPrivate>
        },
        {
            path:'/mytoy',
            element:
            <PrivateRoutes>

              <MyToy></MyToy>
            </PrivateRoutes>
        },
        {
          path:'/alltoy',
          element:<Alltoy></Alltoy>
        },
        {
          path:'/category',
          element:
          <Category></Category>,
        },
        {
          path:'buytoy/:id',
          element:
          <PrivateRoutes>
  
          <BuyToy></BuyToy>,
          </PrivateRoutes>,
            loader:({params})=>fetch(`https://car-toy-server-dusky.vercel.app/alltoy/${params.id}`)
        },
      ]
    },
    {

      path: "/*",
      element:<NotFound></NotFound>
    },


  ]);
  

export default Router;