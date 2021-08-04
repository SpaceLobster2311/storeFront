// contains our intial state, our reducer for managing state, and actions that define our Application behavior.

const initialState = {
  products: [
    {name: "ps5", category: 'electronics', description: 'better than an xbox', price: '750$', count: 0},
    {name: "xbox", category: 'electronics', description: 'it\'ll have to do', price: '600$', count: 3},
    {name: "cheeseDanish", category: 'food', description: 'mmm food', price: '1.50', count: 40},
  ],
  categories: [
    {normalizedName: 'electronics', displayName: 'electronics', description: ''},
    {normalizedName: 'food', displayName: 'food', description: ''}
  ],
  activeCategory: '',
}


// candidates Reducer
// Reducer that will receive actions and update state.
export default function productsReducer(state = initialState, action) {
  switch(action.type) {
    case 'ACTIVATE':
      return { ...state, activeCategory: action.payload }
    default:
      return state;
  }
}

// // define some actions that components might want to perform
// export function increment(name) {
//   return {
//     type: 'INCREMENT',
//     payload: name,
//   }
// }

// export function reset() {
//   return {
//     type: 'RESET',
//   }
// }