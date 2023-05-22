import { useEffect, useState } from "react";
import usetitle from "../hooks/UseTitle";

const MyToy = () => {
    const [mytoy,setMytoy]=useState([])

usetitle('Mytoy')

    useEffect(()=>{
        // fetch('db.json')
        fetch('https://car-toy-server-dusky.vercel.app/bookings')
        .then(res=>res.json())
        .then(data=>setMytoy(data))
    },[])

    const hendleDelete=title=>{


        const Proceed= confirm('Are You Sure To Delete')

        if(Proceed){
fetch(`https://car-toy-server-dusky.vercel.app/${title}`,{
    method:'DELETE',
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if (data.deletedCount >=0){
        alert('Toy car Delete Sucessful')

        const remaining=mytoy.filter(booking=>booking.title !== title);
        setMytoy(remaining)
    }
})



        }
    }

    return (
        <div  >

{
mytoy.map(
    mytoys=>   
    



// new code
<div key={mytoys._id} className="overflow-x-auto  w-full">
  <table className="table mt-8   w-11/12 mx-auto">
    {/* head */}
    <thead>
      <tr>
        <th>CAR IMAGE</th>
        <th>CAR NAME</th>
        <th>COMPANY</th>
        <th> PRICE</th>
        <th>REMOVE
        </th>
      </tr>
    </thead>
    <tbody >
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded-3xl w-64 h-24">
                <img src={mytoys.img} />
              </div>
            </div>
          </div>
        </td>
        <td>
            <div className="text-red-500 text-xl ">
              <div className="font-bold">{mytoys.title}</div>
              <div className="text-sm opacity-50">{mytoys.model}</div>
            </div>
         
        </td>
        <td className="font-semibold text-sky-500">{mytoys.company}</td>
        <th>
          <button className="btn btn-ghost text-green-500 btn-xs text-lg">$ {mytoys.price}</button>
        </th>
        <th>
          <label>

          <button onClick={()=>hendleDelete(mytoys.title)} className="btn btn-circle bg-red-500 text-white btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>

          </label>
        </th>
      </tr>
    </tbody>
    
  </table>
</div>
// new code end





)

} 

             

            </div>  
       
    );
};

export default MyToy;