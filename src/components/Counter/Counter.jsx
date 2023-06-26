import {useCounter} from '../../customHooks/useCounter'
import {CounterStyled} from './CounterStyled'

const Counter = ({stock}) => {
    const{count, addCounter,subCounter}=useCounter(1,stock)
   const stockDisponible =()=>{
    let result = stock - count
    return result
   }
  return (
  <>  
    <CounterStyled>
        <button className='btn-counter' onClick={subCounter}>-</button>
        <p>{count}</p>
        <button className='btn-counter' onClick={addCounter}>+</button>
    </CounterStyled>
    <strong>Stock disponible: {stockDisponible()} unidades</strong>
  </>
  )
}

export default Counter