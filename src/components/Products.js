import React from 'react';
import '../componentsCSS/Catagories.css'
import { connect, useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
// import CategoryList from './CategoryList';
// import ActiveCategory from './ActiveCategory';
const Product = () => {

  const selectedCategory = useSelector(state => state.products.activeCategory);
  const itemsInCategory = useSelector(state => state.products.products)
  const dispatch = useDispatch()

  const setCategory = (category) => {
    dispatch({
      type: 'ACTIVATE',
      payload: category,
    });
  }
  // state should be a list of ALL products

  return(


    <>
          <Typography>{selectedCategory}</Typography>
      {itemsInCategory.map(itemsInCategory => {
        return (
          <Card>
            <CardContent>
              <Typography>{itemsInCategory.name}</Typography>
              
            </CardContent>
            <CardActions>
              <Button onClick={() => setCategory(itemsInCategory.name)} size="small">{itemsInCategory.displayName}</Button>
            </CardActions>
          </Card>
        )
      })}
    
    
    </>
  )
}

export default Product;