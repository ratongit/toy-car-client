import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const LoginPrivate = ({children}) => {
    const {user}=useContext(AuthContext);


    if(!user?.email){
return children
}

    return (
<Navigate to='/'></Navigate>
    );
};

export default LoginPrivate;