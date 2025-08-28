import React from 'react'


const Header = () => {
  const headerStyle = {
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    marginBottom: '2rem',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const contentStyle = {
    textAlign: 'center',
    zIndex: 1
  };

  return (
    <div style={headerStyle}>
      <div style={contentStyle}>
        <h1 className="display-4 fw-bold mb-3">¡L'ANTICA PIZZA!</h1>
        <p className="fs-5">🍕 BIENVENUTO A LA FAMIGLIA🍕</p>
      </div>
    </div>
  );
};

export default Header;