import React from 'react';
import HeroContent from './heroContent';
import style from './index.module.css';
import {useDispatch} from 'react-redux'
import cartAction from '../../../store/actions/cartAction';

 function Hero() {
   const dispatch = useDispatch();
   const obj = {
     name: 'Samurai King Resting',
     category: 'pets',
     price: 510.89,
     currency: 'USD',
     image: {
       src: '/images/samurai.png',
       alt: '',
     },
     bestseller: true,
     featured: true,
     details: null,
   };
      return (
        <div>
          <div className={style.heroHeadWrap}>
            <h2 className={style.heroHeading}>Samurai King Resting</h2>
            <button onClick={()=>{dispatch(cartAction.addToCart(obj));}} className={style.addToCartBtn}>Add to cart</button>
          </div>

          <div
            style={{ backgroundImage: 'url(/images/samurai.png)' }}
            className={style.heroImageContainer}
          >
            <div className={style.photoDayWrap}>
              <p>Photo of the day</p>
            </div>
          </div>
          <span className={style.mobileCartBtn}>
            <button className={style.addToCartBtn}>Add to cart</button>
          </span>
       
            <HeroContent />
            
       
        </div>
      );
}

export default Hero