import React from 'react'
import ProductCard from './ProductCard'
import "./Products.scss"
const Products = ({products}) => {
   
  return (
    <div className="ürün-list">
      {/*//! Buradan spreadle açarak gönderip objenin propertylerini props objesine yerleştirme */}
      {products.map((ürün) => (
        <ProductCard key={ürün.id} {...ürün} />
      ))}

    
    
      
   
      
    </div>
  );
}

export default Products