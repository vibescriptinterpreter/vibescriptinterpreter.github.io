import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import {Route, Navigate } from 'react-router-dom';

export default function ProtectedRoute ({children}) {
    const authValue = useContext(AuthContext);
    
    if (!authValue.currentUser) {
        return(<Navigate to={'/login'}></Navigate>)
    }

    if (authValue.currentUser.email === 'admin@gmail.com') {
        return children
    }

    return <Navigate to={'/login'}/>;
}