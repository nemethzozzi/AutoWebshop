import React from 'react';
import Register from '../Components/Register';
import GoBackHeader from '../Components/GoBackHeader';

const RegisterPage = () => {
    
  const pageStyle = {
    backgroundImage: 'url("./pictures/register_background.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="h-screen flex flex-col" style={pageStyle}>
      <GoBackHeader />
      <Register />
    </div>
  );
}

export default RegisterPage;
