import React from 'react';
import '../componentsCSS/Catagories.css'
import { connect, useSelector } from 'react-redux';


const Catagories = () =>{

  const showCatagories = useSelector(state => state.products.categories);
  console.log(showCatagories)

  return (

    <div className='container'>
      <h3 className='title'>Browse our Catagories</h3>
      <ul className='list'>
        <li>Electronics</li>
        <li>Food</li>
        <text></text>
      </ul>
    </div>

  )
}

export default Catagories;