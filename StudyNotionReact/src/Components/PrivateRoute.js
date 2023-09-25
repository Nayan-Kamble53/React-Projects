import { Navigate } from "react-router-dom";

const PrivateRoute = ({isLoggedIn, children}) => { //children is "Dashboard"
    if(isLoggedIn) {
        return children; //if logged in then only show the children i.e. Dashboard
    }
    else {
        return <Navigate to="/login"/>
    }
}

export default PrivateRoute
