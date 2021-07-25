import React from 'react';
import style from './index.module.css';
import {useDispatch} from 'react-redux'
import cartAction from '../../../../store/actions/cartAction';

 const ProductCard = ({ product, productsLength }) => {
   const dispatch = useDispatch();

   const addProductToCart = (item) => {
     dispatch(cartAction.addToCart(item));
   };
   return (
     <div
       style={{ marginRight: productsLength === 2 ? 60 : 0 }}
       className={style.product}
     >
       <div
         style={{ backgroundImage: `url(${product.image.src})` }}
         className={style.productCard}
       >
         {product.bestseller && <p className={style.bestSeller}>Best Seller</p>}
       </div>
       <button
         onClick={() => {
           addProductToCart(product);
         }}
         className={style.productAddToCartBtn}
       >
         Add to cart
       </button>

       <p className={style.pOne}>{product.category}</p>
       <p className={style.pTwo}>{product.name}</p>
       <p className={style.pThree}>${product.price} </p>
     </div>
   );
 };

export default ProductCard; 