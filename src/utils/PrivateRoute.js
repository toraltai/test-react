import { Redirect, Route, Routes, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import LoginPage from '../pages/LoginPage';

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    const navigate=useNavigate()
    return (
        <Route {...rest}>{!user ? <LoginPage/>: children}</Route>
    )
}

export default PrivateRoute;