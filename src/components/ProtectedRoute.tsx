import React, { ReactNode, useContext } from 'react'
import {Navigate, useLocation} from "react-router-dom"
import { AuthContext } from '../config/AuthProvider';

const ProtectedRoute = (props: any) => {
    const { user } = useContext(AuthContext);
    let location = useLocation();

    // Si l'utilisateur n'est pas connecté ou qu'il n'a pas le role admin alors il est redirigé vers la page d'accueil
    if(user?.role !== "admin") {
        return <Navigate to="/" state={{ from: location }} replace />
    }
    return props.children
};

export default ProtectedRoute;