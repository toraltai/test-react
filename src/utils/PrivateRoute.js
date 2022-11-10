import { Redirect, Route, Routes, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    const navigate=useNavigate()
    return (
        <Route {...rest}>{!user ? navigate("/login"): children}</Route>
    )
}

export default PrivateRoute;