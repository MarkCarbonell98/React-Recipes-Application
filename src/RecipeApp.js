import React, { Component } from 'react';
import './RecipeApp.css';
import Navbar from './navBar/Navbar';
import RecipeList from './RecipeList/RecipeList';

class RecipeApp extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar apptitle="Recipe App" 
          navlinks={['New Recipe', 'Home', 'About', 'Contact Us']} 
          />
        </div>
        <div className="App">
          <RecipeList />
        </div>
      </div>
    );
  }
}

export default RecipeApp;
