import React from 'react';
import Register from '../Components/Register';
import GoBackHeader from '../Components/GoBackHeader';
import Loader from '../Components/Loader';

const RegisterPage = () => {
    
  const pageStyle = {
    backgroundImage: 'url("./pictures/register_background.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <Loader>
    <div className="h-screen flex flex-col" style={pageStyle}>
      <GoBackHeader />
      <Register />
    </div>
    </Loader>
  );
}

export default RegisterPage;
