import React from 'react';
const Card = (props) =>{
  return (
    <div className="container">
      <div className="topspace">
        <div className="card shadow rainy">
          <div className="domen"></div>
        {props.children}

        </div>
      </div>
      
    </div>
  )
}
export default Card;