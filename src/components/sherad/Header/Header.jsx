import { useContext } from 'react';
import '../Header/header.css'
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";

import { AuthContext } from '../../../providers/AuthProvider';
const Header = () => {
    const home = 'Home'
    const category = 'Category'
    const blog = 'Blog'
    const allToy = 'All Toy'
    const myToy = 'My Toy'
    const login = 'Login'
    const register = 'Register'

    const hendleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const { user, logOut } = useContext(AuthContext)

const hendleProfile= ()=>{
    alert('Pleace login First')

}

    return (
        <div className='pt-5'>
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-800 rounded-box w-52">



                            <li> <Link to='/'>{home}</Link></li>
                            <li><Link to='/category'>{category}</Link></li>
                            <li><Link to='blog'>{blog}</Link></li>
                            <li><Link to='mytoy'>{myToy}</Link></li>
                            <li><Link to='alltoy'>{allToy}</Link></li>

                            {user?.email ?

                                <li onClick={hendleLogOut}><Link to='login'>LogOut</Link></li>
                                : <div>
                                    <li><Link to='login'>{login}</Link></li>
                                    <li><Link to='register'>{register}</Link></li>
                                </div>
                            }
                        </ul>


                    </div>
                    <div className="logo flex ">
                        <img className='rounded-3xl max-md:hidden' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5E6_6cMuTPkSm99THsmjWFzB2u16g8nJ0Q&usqp=CAU' alt="" />
                        <h1 className='text-2xl font-bold text-blue-600  flex '><span className='text-orange-500 text-2xl ms-1'>T</span>oy <span className='text-orange-500 text-2xl ms-1'>C</span>ar</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>{home}</Link></li>
                        <li><Link to='/category'>{category}</Link></li>
                        <li><Link to='alltoy'>{allToy}</Link></li>
                        <li><Link to='blog'>{blog}</Link></li>
                          <li><Link to='mytoy'>{myToy}</Link></li>
                        {user?.email ?

                            <li onClick={hendleLogOut}><Link to='login'>LogOut</Link></li>
                            : <div className='flex'>
                                <li><Link to='login'>{login}</Link></li>
                                <li><Link to='register'>{register}</Link></li>
                            </div>
                        }
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <input type="text" placeholder="Search" className="input input-bordered  hidden lg:inline" />

                    <div className="w-10 text-center  rounded-full ">


{
user?
    <img src={user?.photoURL
    } alt='User' />
:

<Link to='/login'>
<div onClick={hendleProfile}>
<FaUserAlt/>
<span> Profile</span>
</div>
</Link>



}                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;