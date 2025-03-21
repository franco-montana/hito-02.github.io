import headerBg from '../assets/header-background.jpg'

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${headerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
  }

  return (
    <div style={headerStyle} className="d-flex align-items-center justify-content-center mb-4">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1 className="display-4 fw-bold">¡Pizzería Mamma Mía!</h1>
            <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header