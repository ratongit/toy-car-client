import { useLoaderData } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const BuyToy = () => {

    
    
    const toyDetails=useLoaderData()
    
    const {_id,title,img,price,rating,company,details,model}=toyDetails
    
    const stars = Array.from({ length: rating }, (_, index) => index + 1);

    const hendleBuyToy=()=>{
        
        const BookingInfo = {_id,title,img,price,company,model
            
        }
        console.log(BookingInfo)
        
        fetch('https://car-toy-server-dusky.vercel.app/bookings',{
    method:'POST',
    headers:{
'content-type':'application/json'
    },
    body:JSON.stringify(BookingInfo)
})
.then(res=>res.json())
.then(data=>{

    console.log(data)
})


}

    return (<div className="hero min-h-screen mt-6" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className=" text-5xl font-bold"></h1>
                    <p className="mb-12 mx-auto text-center  text-3xl font-bold  text-yellow-200">Company 
                    <br />
                    <span className="text-pink-300 text-5xl">{company}</span> 
                     </p>
                    <p className="mb-1 font-bold text-2xl text-yellow-300 ">Car Name 
                    <br />
                    <span className="text-pink-300 text-3xl"> {title}</span>
                    </p>
                    <p className="mb-9 font-bold text-xl text-gray-300 flex align justify-center  ">Rating :
                     <div className='flex text-yellow-300 ms-2 text-center'>

                                        {stars.map((star) => (
                                            <FaStar key={star} />
                                        ))}

                                    </div>
                    </p>
                    <p className="mb-5 font-bold text-xl text-white ">Car Model :{model}</p>
                    <p className="mb-5 text-lg text-green-400 font-semibold">Datials : {details}</p>
                    <p className="mb-12 text-lg text-purple-400 font-bold">Price : $ {price} Only</p>
                    {/* <Link to='/mytoy'> */}
                    
                    <button  onClick={hendleBuyToy} className="btn bg-sky-700">Buy Now</button>
                    {/* </Link> */}

                </div>
            </div>
        </div>
    );
};

export default BuyToy;
