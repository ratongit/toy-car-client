import { useEffect } from "react"

const usetitle =( title) =>{

    useEffect(()=>{

document.title=`${title}-Toy Car`;
    },[title])
}

export default usetitle;