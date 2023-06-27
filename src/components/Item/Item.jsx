import {ItemStyled} from'./ItemStyled'
import {BtnDetailStyled} from'./BtnDetailStyled'

const Item = ({producto}) => {
  
  return (
    <ItemStyled>
      <div className='img'>
        <img src={producto.image} alt={producto.title} />
      </div>
        <h2>{producto.title}</h2>
        <div className='item-body'>
          <BtnDetailStyled to={`/item/${producto.id}`}>Ver Detalles</BtnDetailStyled>
          <span><sup>$</sup>{producto.price}</span>
        </div>
    </ItemStyled>
  )
}

export default Item