import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../utils/authForms.css';
import pizzaLogo from '../assets/mamma-mia-logo.png';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    showMessage: false
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const validateForm = () => {

    if (!formData.email || !formData.password) {
      setFormStatus({
        message: 'Todos los campos son obligatorios',
        isError: true,
        showMessage: true
      });
      return false;
    }


    if (formData.password.length < 6) {
      setFormStatus({
        message: 'La contraseña debe tener al menos 6 caracteres',
        isError: true,
        showMessage: true
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {

      setFormStatus({
        message: '¡Inicio de sesión exitoso!',
        isError: false,
        showMessage: true
      });
      
   
      setFormData({
        email: '',
        password: ''
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <img src={pizzaLogo} alt="Mamma Mia Logo" className="auth-logo" />
          <h2>¡Benvenuto!</h2>
          <p>Inicia sesión para pedir tus pizzas favoritas</p>
        </div>
        
        {formStatus.showMessage && (
          <div className={`auth-message ${formStatus.isError ? 'error' : 'success'}`}>
            {formStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alguien@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i> Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          
          <button type="submit" className="auth-button">
            <i className="fas fa-sign-in-alt"></i> Iniciar Sesión
          </button>
          
          <div className="auth-options">
            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
            <p className="register-link">¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
          </div>
          
          <div className="auth-divider">
            <span>o inicia sesión con</span>
          </div>
          
          <div className="social-buttons">
            <button type="button" className="social-button google">
              <i className="fab fa-google"></i> Google
            </button>
            <button type="button" className="social-button facebook">
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
          </div>
        </form>
      </div>
      
      <div className="auth-benefits">
        <h3>Ventajas de iniciar sesión</h3>
        <ul>
          <li><i className="fas fa-history"></i> Accede a tu historial de pedidos</li>
          <li><i className="fas fa-star"></i> Guarda tus pizzas favoritas</li>
          <li><i className="fas fa-percentage"></i> Recibe ofertas exclusivas para nuestros clientes</li>
          <li><i className="fas fa-truck"></i> Seguimiento de tus entregas</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginPage;