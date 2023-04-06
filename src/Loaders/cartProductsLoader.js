import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async ()=>{
     const loadedProducts = await fetch('products.json')
     const products = await loadedProducts.json();
     // console.log(products)

     const storedCart = getShoppingCart();
     
     const saveCart =[]
     for(let id in storedCart){
          const addedProduct = products.find(pd=> pd.id === id);
         if(addedProduct){
          const quantity = storedCart[id];
          addedProduct.quantity= quantity;
          saveCart.push(addedProduct)
         }
         
     }
     return saveCart;
}

export {cartProductLoader}