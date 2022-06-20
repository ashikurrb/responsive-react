import React from 'react';
import useAuth from '../../contexts/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h1>Please Login Here</h1>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Sign in with Google</button>
        </div>
    );
};

export default Login;