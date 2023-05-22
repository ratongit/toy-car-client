import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const ServicesCard = ({ toys }) => {
    const { _id, title, rating, img, price, details, model } = toys;

    
        const stars = Array.from({ length: rating }, (_, index) => index + 1);

               

        return (

            <div >

                <div className="card w-80 sm:w-96 lg:w-96 lg:ml-5 align-middle   shadow-2xl sm:justify-center shadow-blue-900 ">

                    <div className="h-60">
                        <figure  >
                            <img className="h-64 rounded-lg" src={img} alt="" />
                        </figure>
                    </div>
                    <div className="card-body">
                        <div className="flex justify-between align">

                            <h2 className="card-title"><h1 className="text-orange-500 font-bold">{title}</h1>
                            </h2>
                            <div>


                                <p className='text-blue-300 flex align '>Rating:

                                    <div className='flex text-blue-200 ms-2'>
                                        {stars.map((star) => (
                                            <FaStar key={star} />
                                        ))}
                                    </div>

                                </p>
                            </div>
                        </div>
                        <p className="text-red-400 text-sm mt-2">Modle : {model}</p>
                        <h2 className="text-lg"><h1 className="text-white">{details}</h1>
                        </h2>

                        <div className="card-actions flex justify-end">
                            <p className=" text-lg font-semibold text-yellow-500">price:
                                $  {price}
                            </p>

                            <Link to={`/buytoy/${_id}`}>

                                <button className="btn btn-success">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>




            </div>

        );
    };

    export default ServicesCard;