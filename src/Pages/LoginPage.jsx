import React from 'react';
import Login from '../Components/Login';
import GoBackHeader from '../Components/GoBackHeader';

const LoginPage= () => {

    const pageStyle = {
        backgroundImage: 'url("./pictures/login_background.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      };

    return (
        <div className="h-screen flex flex-col bg-gray-200" style={pageStyle}>
        <GoBackHeader />
        <Login />
        </div>


    );
}

export default LoginPage;