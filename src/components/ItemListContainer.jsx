import { useState, useEffect } from "react"
import { ItemsListContainerStyled } from "../StyledComponent/ItemListContainer"
import { pedirProductos,getByCategory } from "../asyncmock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

const[productos,setProductos]=useState([]);

const {idCategoria}=useParams();

useEffect(()=>{
  const getProductos = idCategoria ? getByCategory : pedirProductos;

  getProductos(idCategoria)
  .then(res => setProductos(res))
  .catch(err => console.log(err))
  
},[idCategoria]) 

  return (
    <ItemsListContainerStyled>
      <div>
          <ItemList  productos={productos}/>
      </div>
    </ItemsListContainerStyled>
  )
}

export default ItemListContainer