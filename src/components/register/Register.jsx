import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import usetitle from "../hooks/UseTitle";

const Register = () => {
const {creactUser}=useContext(AuthContext)

usetitle('register')

    const HendleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const name = form.name.value
        const photo = form.photo.value
        const password = form.password.value

        console.log(email, password,name,photo)
    
        // loading(false)

        creactUser(email,password)
        .then(res=>{
            const user =res.user;
            console.log(user)
            form.reset()
            alert('Congratulation Registation successful ')
            
        })
        .catch(error=>{
            alert(`Via  Error :      : ${error}`)
            console.log(error)}
            )
    
    }
    return (
        <div>
            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col md:flex-row gap-20">
                    <div className="text-center md:text-left max-md:hidden xsm:hidden">
                        <img src="https://youthed.org.za/wp-content/uploads/2022/10/login-users.png" alt="" className="lg:w-9/12"/>



                    </div>

                    <div className="login-card d-inline" >
                        <div className="hero min-h-screen ">
                            <div className="hero-content block">

                                < form onSubmit={HendleSubmit} className="card-body bg-blue-200  max-md:w-96  align-middle  text-lg rounded-lg">
                                    <h1 className='text-2xl text-center font-semibold'>Register</h1>
                                    <br />
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">Name</span>
                                        </label>
                                        <input type="text" className="" name="name" id="name" placeholder="Your Name" required></input>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">Photo Url</span>
                                        </label>
                                        <input type="text" className="" name="photo" id="photo" placeholder="Your Photo Url" required></input>
                                    </div>
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
                                        <button className="btn btn-primary"><input type="submit" value='Register Now'></input></button>
                                    </div>
                                </form>

                                <a href='/login'>
                                    <button className="btn btn-active btn-link 
                                    text-white
                                    ">Alrady Have An Account? </button>
                                </a>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;