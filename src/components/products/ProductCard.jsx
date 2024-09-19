import React from 'react'



const ProductCard = ({title,price,image}) => {

 
  return (
    <div className="card">
      <div className="price">
        <h3>{price} </h3>
      </div>

      <img src={image} alt="" />

      <div className="card_over">
        <h2>{title} </h2>
      </div>
    </div>
  );
};















export default ProductCard