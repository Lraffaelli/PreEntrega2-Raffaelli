import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> } />
      <Route path='/item/:idItem' element={<ItemDetailContainer/>} />

     </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
