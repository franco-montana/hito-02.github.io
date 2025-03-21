import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../pizzas';

const Home = () => {
  return (
    <>
    <Header />
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Nuestras Pizzas</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {pizzas.map(pizza => (
          <div key={pizza.id} className="col">
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
