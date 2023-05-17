import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
     const storedCart = getShoppingCart();

     const ids = Object.keys(storedCart)
     console.log(ids);

     const loadedProducts = await fetch('http://localhost:5000/productById' , {
          method: 'POST',
          headers: {
               'content-type': 'application/json'
          },
          body: JSON.stringify(ids)
     })
     const products = await loadedProducts.json();
     // console.log(products)


     const saveCart = []
     for (let id in storedCart) {
          const addedProduct = products.find(pd => pd._id === id);
          if (addedProduct) {
               const quantity = storedCart[id];
               addedProduct.quantity = quantity;
               saveCart.push(addedProduct)
          }

     }
     return saveCart;
}

export { cartProductLoader }