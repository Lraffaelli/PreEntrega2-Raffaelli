import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { getOneProduct } from "../asyncmock"
import { ItemDetailContainerStyled } from "../StyledComponent/ItemDetailConteiner" 


const ItemDetailConatiner = () => {

    const[producto, setProducto]=useState({})

    const {idItem}=useParams()

    useEffect(() => {

        getOneProduct(idItem)
        .then(res=>setProducto(res))
        .catch(err => console.log(err))
    },[idItem])
console.log(producto)
  return (
    <ItemDetailContainerStyled>
        <ItemDetail  {...producto}/>
    </ItemDetailContainerStyled>
  )
}

export default ItemDetailConatiner