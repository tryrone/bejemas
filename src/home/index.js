import React,{useEffect} from 'react';
import Header from './components/header';
import Hero from './components/hero';
import ProductContent from './components/productContent';
import styles from './style/index.module.css';
import products from '../../products.json';
import {useDispatch} from 'react-redux'
import cartAction from '../store/actions/cartAction';

function HomeLayout() { 
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(cartAction.setCartData({products:products.products}));
  },[]);
      return (
        <>
          <Header />
          <div className={styles.homeContainer}>
            <Hero />
            <ProductContent />
          </div>
        </>
      );
}
 export default HomeLayout