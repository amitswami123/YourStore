import React from 'react'
import './Cart.css'
import { useNavigate } from "react-router-dom";
import Header from './Header';
export default function Cart() {
  const navigate=useNavigate();
  return (
    <div>
        <Header></Header>
        <button onClick={() => navigate(-1)} className="previous">&laquo; <b>Previous To HomePage</b></button>
    </div>
  )
}
