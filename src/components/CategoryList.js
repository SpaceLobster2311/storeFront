import { useSelector, useDispatch } from 'react-redux';
import '../componentsCSS/Catagories.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

function CategoryList() {

  // here is a hook that read from state.
  const categories = useSelector(state => state.products.categories);
  const dispatch = useDispatch();

  const setCategory = (category) => {
    dispatch({
      type: 'ACTIVATE',
      payload: category,
    });
  }

  return (
    <List>
      {/* // displayy each category */}
      {categories.map(category => {
        return (
          <ListItem class='list-map'onClick={() => setCategory(category.normalizedName)}>
            <ListItemText class='list-item' primary={category.displayName}/>
          </ListItem>
        )
      })}
    </List>
  )
}

export default CategoryList;