import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../utils/authForms.css';
import pizzaLogo from '../assets/mamma-mia-logo.png';

const RegisterPage = () => {
  // estado inicial del form
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  // E° DE ERROR Y EXITO
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    showMessage: false
  });

  // Cambios en el imput
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // validación del form
  const validateForm = () => {
    
    if (!formData.email || !formData.password || !formData.confirmPassword) {
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

    
    if (formData.password !== formData.confirmPassword) {
      setFormStatus({
        message: 'Las contraseñas no coinciden',
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
        message: '¡Registro exitoso!',
        isError: false,
        showMessage: true
      });
      
      
      setFormData({
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <div className="auth-container">
    <div className="auth-card">
      <div className="auth-header">
        <img src={pizzaLogo} alt="Mamma Mia Logo" className="auth-logo" />
        <h2>¡Únete a la famiglia!</h2>
        <p>Regístrate para disfrutar de nuestras deliciosas pizzas</p>
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
            placeholder="tumail@ejemplo.com"
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
            placeholder="Mínimo 6 caracteres"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">
            <i className="fas fa-lock"></i> Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Repite la contraseña"
          />
        </div>
        
        <div className="form-group checkbox">
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">
            Acepto los <a href="#">términos y condiciones</a> y la <a href="#">política de privacidad</a>
          </label>
        </div>
        
        <button type="submit" className="auth-button">
          <i className="fas fa-user-plus"></i> Crear Cuenta
        </button>
        
        <div className="auth-options">
        <p className="login-link">¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
        </div>
        
        <div className="auth-divider">
          <span>o regístrate con</span>
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
      <h3>Ventajas de registrarte</h3>
      <ul>
        <li><i className="fas fa-pizza-slice"></i> Primer pedido con 25% de descuento</li>
        <li><i className="fas fa-gift"></i> Regalo de cumpleaños especial</li>
        <li><i className="fas fa-star"></i> Acumula puntos en cada compra</li>
        <li><i className="fas fa-medal"></i> Accede a ofertas exclusivas para miembros</li>
      </ul>
      
      <div className="promo-banner">
        <p>¡PROMOCIÓN ESPECIAL!</p>
        <h4>2x1 EN PIZZAS MEDIANAS</h4>
        <p>Solo para nuevos registros</p>
      </div>
    </div>
  </div>
);
};
export default RegisterPage;