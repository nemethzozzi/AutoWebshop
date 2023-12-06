import React from 'react';

const GoBackHeader = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
          <img
            src="./icons/goback.png"
            alt="Go Back"
            onClick={goBack}
            style={{ cursor: 'pointer' }}
            className="icon-rotate rounded-full bg-white"
          />
      </div>
    </nav>
  );
};

export default GoBackHeader;
