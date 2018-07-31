import React, {Component} from 'react';
import './RecipeList.css';
import Recipe from '../Recipe';
import PropTypes from 'prop-types'

class RecipeList extends Component {
	static defaultProps = {
		recipes: [
      {
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "http://lh3.ggpht.com/-_dVT9UJWKNM/T7Mb6efCcKI/AAAAAAAAQlw/3k-BSS4Ofjc/avocado%252520egg%252520salad%252520sandwich%252520219_thumb%25255B3%25255D.jpg?imgmax=800"
      },
      {
        title: "Fried Fish",
        instructions: "Cover the fish with flour, then fry in the oil. Add some lemmons to give it some taste! ",
        ingredients: ["400gr of fish", "2 lemmos", "oil", "french fries", "a beach ;)"],
        img: "https://assets.marthastewart.com/styles/wmax-750/d20/fried-fish-103018840/fried-fish-103018840_horiz.jpg?itok=-5NnSUY1"
      },
      {
        title: "Brownie With Ice",
        instructions: "Bake the brownie for 20min at 150 degrees, the add some ice cream and chocolate syrup at taste!",
        ingredients: ["Vanilla escense", "flour", "Ice Cream", "400 grams Chocolate", "Chocolate Syrup"],
        img: "https://media-cdn.tripadvisor.com/media/photo-s/02/66/6d/6d/hot-fudge-brownie-with.jpg"
      }
      ]
	}

	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object)
	}

	render() {
		const recipes = this.props.recipes.map((r, index) => (
			<Recipe key={index} {...r} />
		));
	return (
		<div className='recipe-list'>
			{recipes}
		</div>
	);
}

}

export default RecipeList;