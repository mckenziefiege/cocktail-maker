import store from './index.js'

export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS"

export const updateIngredients = (ingredients) => ({
    type: UPDATE_INGREDIENTS,
    payload: ingredients
})

export const fetchIngredients = () => {
  // console.log(store.getState().selectedBreed)
  // return (dispatch) => {
  //   return fetch(`https://dog.ceo/api/breed/${store.getState().selectedBreed}/images/random`)
  //   .then(resp => resp.json())
  //   .then(resp => dispatch(updateImage(resp.message)))
  //   .catch(console.error)
  // }
}
