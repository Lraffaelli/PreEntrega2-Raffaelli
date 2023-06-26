import {ItemDetailStyled} from'../StyledComponent/ItemDetail'
import Counter from './Counter'

const ItemDetail = ({title,image, price,stock, description}) => {
  console.log({title})
  return (
    <ItemDetailStyled>
        <div className='img-detail'>
          <img src={image} alt={title} />          
        </div>
        <div className='info-detail'>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className='price-detail'>
            <Counter stock={stock}/>
            <span>${price}</span>
          </div>
          <button>Agregar al Carrito</button>
        </div>
        
        
    </ItemDetailStyled>
  )
}

export default ItemDetail