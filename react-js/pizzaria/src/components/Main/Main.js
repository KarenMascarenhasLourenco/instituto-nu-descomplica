import React, { useState } from 'react';
import CardProduto from '../CardProduto/CardProduto';
import CardCompra from '../CardCompra/CardCompra';
import './Main.css'

export const Main = ()=> {
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});

  const addToCart = (product) => {
   setCartItems((prevCartItems) => {
    const existingProduct = prevCartItems.find(
     (item) => item.key === product.key
    );

    if (existingProduct) {
     setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.key]: (prevQuantities[product.key] || 0) + 1,
     }));

     return prevCartItems;
    } else {
     setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.key]: 1,
     }));

     return [...prevCartItems, product];
    }
   });
  };
  const removeFromCart = (productToRemove) => {
   setCartItems((prevCartItems) =>
    prevCartItems.filter((product) => product.key !== productToRemove.key)
   );
  };
  const productList = [
   {
    name: "Peperoni",
    description:
     "Deliciosa pizza de pepperoni, com generosas fatias de queijo derretido e saborosos pedaços de pepperoni levemente picante.",
    imagePath: "./images/pizza1.png",
    price: "49.90",
    key:0
   },
   {
    name: "Siciliana",
    description:
     "Autêntica pizza siciliana, com massa macia e bordas crocantes, coberta com molho de tomate caseiro, queijo fresco,azeitonas e toque de manjericão",
    imagePath: "./images/pizza2.png",
    price: "49.90",
    key:1
   },
   {
    name: "Cogumelo",
    description:
     "Deliciosa pizza de cogumelo, com uma mistura irresistível de cogumelos frescos, queijo derretido e temperos especiais",
    imagePath: "./images/pizza3.png",
    price: "49.90",
    key:2
   },
   {
    name: "Calabresa",
    description:
     "Saborosa pizza de calabresa, com fatias suculentas de calabresa defumada, queijo derretido e um toque de cebola",
    imagePath: "./images/pizza4.png",
    price: "49.90",
    key:3
   },
   {
    name: "Quatro queijos",
    description:
     "Exquisite pizza quatro queijos, com uma seleção cremosa de queijo mussarela, gorgonzola, provolone e parmesão, derretidos em perfeita harmonia.",
    imagePath: "./images/pizza5.png",
    price: "49.90",
    key:4
   },
   {
    name: "Lombinho",
    description:
     "Deliciosa pizza de lombinho, com suculentos pedaços de lombinho grelhado, cebola caramelizada e queijo derretido",
    imagePath: "./images/pizza6.png",
    price: "49.90",
    key:5
   },
  ];
  return (
   <main>
    <section className="staff">
     {productList.map((product) => (
      <CardProduto
       key={product.key}
       name={product.name}
       description={product.description}
       price={product.price}
       image={product.imagePath}
       onAddToCart={() => addToCart(product)}
      />
     ))}
     ;
    </section>
    <section className='carrinhoCompra'>
     <h2>Carrinho de Compras</h2>
     {cartItems.map((item) => (
      <CardCompra
       key={item.key}
       name={item.name}
       price={item.price}
       quantity={cartItems.filter((product) => product.key === item.key).length}
       onRemove={() => removeFromCart(item)}
      />
     ))}
    </section>
   </main>
  );
};
export default Main;