import {ItemStyled} from'../StyledComponent/ItemStyled'
import {BtnDetailStyled} from'../StyledComponent/BtnDetailStyled'

const Item = ({producto}) => {
  
  return (
    <ItemStyled>
        <img src={producto.image} alt={producto.title} />
        <h2>{producto.title}</h2>
          <span>${producto.price}</span>        
        <div className='item-body'>
         
          <BtnDetailStyled to={`/item/${producto.id}`}>Ver Detalles</BtnDetailStyled>
        </div>
    </ItemStyled>
  )
}

export default Item