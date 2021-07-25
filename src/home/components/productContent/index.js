import React,{useState} from 'react';
import ProductGrid from './productGrid';
import ProductHead from './productHead';

 const ProductContent = () => {
  const[visible,setVisible]= useState(false);
      return (
        <div>
          <ProductHead setVisible={(val) => {console.log('Okay....'); setVisible(val)}} />
          <ProductGrid visible={visible} /> 
        </div>
      );
}

export default ProductContent;