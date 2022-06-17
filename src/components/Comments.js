import React from 'react'
// import logo from '../logo.svg';
import './Comment.css'
import { useNavigate } from "react-router-dom";

function Comments(props) {
  const navigate = useNavigate();

  return (
      <>
       <div className="card">
  <img src={props.image} alt="Denim Jeans" style={{width:'100%'}} />
  <h5>{props.title}</h5>
  <p className="price">Cost:  {props.price}</p>
  <p>Some text about the jeans..</p>
  <p><button  onClick={() => navigate("/cart")}
>Add to Cart</button></p>
</div>
      </>
  )
}

export default Comments