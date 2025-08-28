import React from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';

const Cart = () => {
  const { 
    cartItems, 
    increaseQuantity, 
    decreaseQuantity, 
    getTotal 
  } = useCart();

  return (
    <div className="container mt-5">
      <h2 className="mb-4" style={{ color: "#2ecc71" }}>
        Carrito de Compras
      </h2>
      
      {cartItems.length === 0 ? (
        <div className="alert" style={{ backgroundColor: "var(--secondary-color)", color: "white" }}>
          No hay productos en el carrito
        </div>
      ) : (
        <>
          <div className="card mb-4" style={{ 
            backgroundColor: "var(--card-color)", 
            borderRadius: "var(--border-radius)",
            boxShadow: "var(--box-shadow)"
          }}>
            <div className="card-body">
              {cartItems.map(pizza => (
                <div key={pizza.id} className="row mb-3 align-items-center">
                  <div className="col-md-2">
                    <img 
                      src={pizza.img} 
                      alt={pizza.name} 
                      className="img-fluid rounded" 
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-4">
                    <h5>{pizza.name}</h5>
                    <p>Precio: ${formatPrice(pizza.price)}</p>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-center">
                      <button 
                        className="btn btn-sm" 
                        style={{ backgroundColor: "var(--error-color)", color: "white" }}
                        onClick={() => decreaseQuantity(pizza.id)}
                      >
                        -
                      </button>
                      <span className="mx-2">{pizza.quantity}</span>
                      <button 
                        className="btn btn-sm" 
                        style={{ backgroundColor: "var(--success-color)", color: "white" }}
                        onClick={() => increaseQuantity(pizza.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 text-end">
                    <strong>${formatPrice(pizza.price * pizza.quantity)}</strong>
                  </div>
                  <hr className="mt-3" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 offset-md-6">
              <div className="card" style={{ 
                backgroundColor: "var(--card-color)", 
                borderRadius: "var(--border-radius)",
                boxShadow: "var(--box-shadow)"
              }}>
                <div className="card-body">
                  <h4 className="mb-3">Resumen de tu compra</h4>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Total:</span>
                    <strong>${formatPrice(getTotal())}</strong>
                  </div>
                  <button 
                    className="btn w-100" 
                    style={{ backgroundColor: "var(--primary-color)", color: "white" }}
                  >
                    Continuar al pago
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
