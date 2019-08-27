export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS"

export const updateIngredients = (ingredients) => ({
  type: UPDATE_INGREDIENTS,
  payload: ingredients
})

export const fetchIngredients = () => {
  return (dispatch) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
    .then(resp => resp.json())
    .then(resp => dispatch(updateIngredients(resp.drinks)))
    .catch(console.error)
  }
}
