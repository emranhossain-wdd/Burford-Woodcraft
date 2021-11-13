import { RefreshIcon } from '@heroicons/react/outline';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();

    if (isLoading) {
        return <div className="flex justify-center"><RefreshIcon className="h-20 w-20 text-indigo-600 animate-spin" aria-hidden="true" /></div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;