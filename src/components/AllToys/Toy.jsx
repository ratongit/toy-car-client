import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const Toy = () => {

    const [toy,setToy]=useState([])

    useEffect(()=>{
        // fetch('db.json')
        fetch('https://car-toy-server-dusky.vercel.app/alltoy')
        .then(res=>res.json())
        .then(data=>setToy(data))
    },[])
    return (
        <div className="grid grid-flow-row md:grid-cols-2 gap-4 justify-center lg:grid-cols-3 " >

{
toy.map(service=><ToyCard  key={service._id}   toys={service}></ToyCard>

)

} 

             

            </div>  
       
    );
};

export default Toy;