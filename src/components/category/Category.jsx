import {  useState } from "react";
import { Link } from "react-router-dom";
import './category.css'

const Category = () => {


    const [category, setCategory] = useState([])

    const HendleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const password = form.password.value


        fetch(`https://car-toy-server-dusky.vercel.app/bookings?category=${password}`)
            .then(res => res.json())
            .then(data => setCategory(data))

        console.log(password)

    }
    return (


        <div className="w-full h-full mt-12">
<div className="flex mb-12 justify-center">


            < form onSubmit={HendleSubmit} >
                <input type="text" defaultValue={'car'} name="password" className="hidden" ></input>
                <div className="">
                    <button
                      className="btn w-40  transparent btn-primary shadow-lg shadow-sky-700">
                        <input type="submit" value='Styleist Car' ></input>
                    </button>
                </div>
            </form>

            < form onSubmit={HendleSubmit} >
                <input type="text" defaultValue={'super-Car'} name="password" className="hidden"></input>
                <div className="">
                    <button
                      className="btn w-40 shadow-lg shadow-sky-700  transparent">
                        <input type="submit"  value='Super Cars' ></input>
                    </button>
                </div>
            </form>
            < form onSubmit={HendleSubmit} >
                <input type="text" defaultValue={'police-Car'} name="password" className="hidden"></input>
                <div className="">
                    <button
                      className="btn w-40 shadow-lg shadow-sky-700  transparent">
                        <input type="submit"  value='Police Cars' ></input>
                    </button>
                </div>
            </form>

</div>



            <div className="grid grid-flow-row md:grid-cols-2 gap-4 justify-center lg:grid-cols-3 " >

{


category.map(categorys=>
    <div key={categorys._id} className="card w-80 sm:w-96 lg:w-96 lg:ml-5 align-middle   shadow-2xl sm:justify-center shadow-blue-900 ">

    <div className="h-60">
        <figure  >
            <img className="h-64 rounded-lg" src={categorys.img} alt="" />
        </figure>
    </div>
    <div className="card-body">
        <div className="flex justify-between align">

            <h2 className="card-title"><h1 className="text-orange-500 font-bold">{categorys.title}</h1>
            </h2>
            <div>


                <p className='text-blue-300 flex align '>Rating:

                    {/* <div className='flex text-blue-200 ms-2'>
                        {stars.map((star) => (
                            <FaStar key={star} />
                        ))}
                    </div>
 */}
                </p>
            </div>
        </div>
        <p className="text-red-400 text-sm mt-2">Modle : {categorys.model}</p>
        <h2 className="text-lg"><h1 className="text-white">{categorys.details}</h1>
        </h2>

        <div className="card-actions flex justify-end">
            <p className=" text-lg font-semibold text-yellow-500">price:
                $  {categorys.price}
            </p>

            <Link to={`/buytoy/${categorys._id}`}>

                <button className="btn btn-success">Details</button>
            </Link>
        </div>
    </div>
</div>



)   }
</div>





























        </div>
    );
};

export default Category;