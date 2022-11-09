import React from 'react';
import {Navigate, useLocation, useOutlet} from "react-router";
import {useAuth} from "../../hooks/useAuth";

const ProtectedRoute = () => {
    const {user} = useAuth();
    const outlet = useOutlet();
    const location = useLocation()
    if (!user) {
        return <Navigate to="/bejelentkezes" state={{from: location}} replace/>;
    }

    return (
        <div>
            {outlet}
        </div>
    );
}

export default ProtectedRoute;