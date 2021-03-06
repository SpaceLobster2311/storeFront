import React from 'react';
import '../componentsCSS/Catagories.css'
import { connect, useSelector } from 'react-redux';
import CategoryList from './CategoryList';
import Product from '../components/Products'
import ActiveCategory from './ActiveCategory';
const Catagories = () =>{

  const showCatagories = useSelector(state => state.products.categories);
  console.log(showCatagories)

  return (
    <div className='container'>
      <h3 className='title'>Browse our Catagories</h3>
      <ul className='list'>
        
        {/* <li>Electronics</li>
        <li>Food</li> */}
        <CategoryList />
        <ActiveCategory />
        <Product />

      </ul>
    </div>

  )
}

export default Catagories;