import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'bg-neutral-950',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  return (
    <div style={footerStyle}>
      <p>&copy; 2024 RayCode by Mohamed Afraz. All rights reserved.</p>
    </div>
  );
};

export default Footer;
