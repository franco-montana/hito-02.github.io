import { formatPrice } from '../utils/formatPrice'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-3">Ingredientes:</h6>
        <ul className="list-group list-group-flush mb-3">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-group-item">🍕 {ingredient}</li>
          ))}
        </ul>
        <p className="fw-bold fs-4 text-center">
          ${formatPrice(price)}
        </p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-info">Ver más</button>
          <button className="btn btn-danger">Añadir</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza