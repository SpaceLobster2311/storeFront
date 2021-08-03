// contains our intial state, our reducer for managing state, and actions that define our Application behavior.

const initialState = {
  products: [
    {name: "ps5", category: 'eletronics', description: 'better than an xbox', price: '750$', count: 0},
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
export default function candidatesReducer(state = initialState, action) {

  switch(action.type) {
    case 'INCREMENT':
      // gets a name on the payload, and adds 1 to both candiate object and totalVotes
      let totalVotes = state.totalVotes + 1;
      let candidates = state.products.map(candidate => {
        if(candidate.name === action.payload) {
          return { name: candidate.name, votes: candidate.votes + 1 }
        }
        return candidate;
      });
      return { totalVotes, candidates };
    case 'RESET':
      return initialState;
    default:
        return state;
  }
}

// define some actions that components might want to perform
export function increment(name) {
  return {
    type: 'INCREMENT',
    payload: name,
  }
}

export function reset() {
  return {
    type: 'RESET',
  }
}