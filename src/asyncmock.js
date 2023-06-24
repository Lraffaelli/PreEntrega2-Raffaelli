import data from "./json/productos.json";

export const pedirProductos= ()=>{
    return new Promise((resolve) => {
        resolve(data)
})
};

export const getOneProduct =(id) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
         const producto = data.find(prod=>prod.id.toString() === id)
         resolve(producto)
          
        },1000)
    })
}

export const getByCategory = (idCategoria) => {    
    return new Promise(resolve => {
        setTimeout(() => {
            const byCategory = data.filter(prod => prod.idCategory === idCategoria);            
            resolve(byCategory);
        }, 1000)
    })
}

