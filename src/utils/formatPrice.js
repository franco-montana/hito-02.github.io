export const formatPrice = (price) => {
    return price.toLocaleString('es-CL', {
      minimumFractionDigits: 0
    })
  }