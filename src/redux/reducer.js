const initialState = {
  ingredients: []
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "UPDATE_INGREDIENTS":
      return {...state, ingredients: action.payload}
    default:
      return state
  }
}

export default reducer
