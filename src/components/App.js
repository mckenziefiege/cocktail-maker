import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchIngredients} from '../redux/actions'
import '../App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchIngredients()
  }

  render () {
    console.log(this.props)
    return (
      <div className="App">
        cocktail maker
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ingredients: state.ingredients
})

const mapDispatchToProps = (dispatch) => ({
  fetchIngredients: () => dispatch(fetchIngredients())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
