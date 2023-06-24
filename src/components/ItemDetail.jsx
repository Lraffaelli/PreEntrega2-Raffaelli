import {ItemDetailStyled} from'../StyledComponent/ItemDetail'
import Counter from './Counter'

const ItemDetail = ({title,image, price,stock, description}) => {
  console.log({title})
  return (
    <ItemDetailStyled>

        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <span>${price}</span>
        
        <Counter stock={stock}/>
        
    </ItemDetailStyled>
  )
}

export default ItemDetail