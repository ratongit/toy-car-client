import { useContext } from "react";
import AuthProvider, { AuthContext } from "../../providers/AuthProvider";
import usetitle from "../hooks/UseTitle";

const Login = () => {

    usetitle('LogIn')
    
    const {singIn}=useContext(AuthContext)


    const HendleSubmit = (event) => {

        event.preventDefault()
        const form=event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)
        
        singIn(email,password)
        .then(res=>{
            const user =res.user;
            console.log(user)
            form.reset()
            alert('Congratulation LogIn successful ')
        })
        .catch(error=> 
            <>
            {alert(`Error  ${error}`)
        }
        console.log({error})
        </>
    )
    }        
    

//     return (
//         <div className="background" >    



//         <div className="login-card d-inline mt-0" >    
// <div className="hero min-h-screen mt-0 ">
//   <div className="hero-content block">
//       <h1 className="text-5xl text-white font-bold block mb-10 top-logIn">Log in</h1>
//     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 block">
//       <  form onSubmit={HendleSubmit} className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-white">Email</span>
//           </label>
//           <input type="email" className="text-white"  name="eamil" id="email" placeholder="Your Email" required></input>
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-white">Password</span>
//           </label>
//           <input  type="password" className="text-white" name="passwoed" id="password" placeholder="Your password" required ></input>
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary"><input type="submit" value='Login Now'></input></button>
//         </div>
//       </form>

// <a href='/register'>  
//    <button className="btn btn-active btn-link text-white">New user to Food World?</button>  
// </a> 
//         </div>
//   </div>
// </div>

//         </div>
//         </div>
//     )

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col md:flex-row gap-20">
                    <div className="text-center md:text-left max-md:hidden xsm:hidden">
                        <img src="https://youthed.org.za/wp-content/uploads/2022/10/login-users.png" alt="" className="lg:w-9/12"/>



                    </div>

                    <div className="login-card d-inline" >
                        <div className="hero min-h-screen ">
                            <div className="hero-content block">

                                < form onSubmit={HendleSubmit} className="card-body bg-blue-200   max-md:w-80 align-middle  text-lg rounded-lg">
                                    <h1 className='text-2xl text-center font-semibold'>LogIn</h1>
                                    <br />
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">Email</span>
                                        </label>
                                        <input type="email" className="" name="eamil" id="email" placeholder="Your Email" required></input>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">Password</span>
                                        </label>
                                        <input type="password" name="passwoed" id="password" placeholder="Your password" required ></input>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary"><input type="submit" value='Login Now'></input></button>
                                    </div>
                                </form>

                                <a href='/register'>
                                    <button className="btn btn-active btn-link ">New user to Toy car? </button>
                                </a>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;