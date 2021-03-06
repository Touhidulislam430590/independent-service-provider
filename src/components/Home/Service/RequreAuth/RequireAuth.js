import React from 'react';
import { auth } from '../../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <p>Loading</p>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate to='/signin' state={{from: location}} replace></Navigate>
    }
};

export default RequireAuth;