import { Cart } from './CartWidget'
import CartIcon from '../cart.png'

const CartWidget = () => {
  return (
    <Cart>
        <div>
            <a href="#"><img src={CartIcon} alt="Carrito" /></a>            
            <p>9</p>
        </div>
    </Cart>
  )
}

export default CartWidget