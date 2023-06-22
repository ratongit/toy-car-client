import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);

if(loading){
    return <progress className="progress w-56 align text-center mt-56"></progress>
}

    if(user?.email){
return children;
    }
    return (
        <>
{        alert('Pleasc log in first !!!')
}        <Navigate to='/' replace='true'></Navigate> 
        </>
    );
};

export default PrivateRoutes;