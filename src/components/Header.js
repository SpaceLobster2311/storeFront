import React from 'react';
import '../componentsCSS/Header.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Header = () =>{


  return (
    <div className='header'>
    <h1>Our Store</h1>
    <div className='cart'>
      <AddShoppingCartIcon />
    </div>
    
    
    </div>
  )
}



export default Header;
