/*default props propTypes*/
// defaultProps give props a default value
// propTypes specifies what props a component is expecting

class IngredientsList extends Component {
	static defaultProps = {
		ingredients: []
	}

	render() {
		return(
			<ul>
				{this.props.ingredients.map((ing, index) => (
					<li key={index}>{ing}</li>
					))}
			</ul>
			);
	}
}

/*becomes useful for optional components that the user can or not 
mark*/

//another syntax

class IngredientsList extends Component {
	render() {
		return(
			<ul>
				{this.props.ingredients.map((ing, index) => (
					<li key={index}>{ing}</li>
					))}
			</ul>
			)
	}
}

IngredientsList.defaultProps = {
	ingredients: []
}

//another example 

class App extends Component {
	static defaultProps = {
		recipes: [{
			title: "Spaghetti",
			ingredients: ["flour", "water"],
			instructions: "Mix ingredients",
			img: "x.jpg"
		}]
	}
	render() {
		return(
			<div>
				{this.props.recipes.map((r, index) => (
					<Recipe key={index} title={r.title}
					ingredients={r.ingredients}
					instructions={r.instructions}
					img={r.img}
					/>
				))}
			</div>
			);
	}
}

class App extends Component {
	static defaultProps = {
		recipes: [{
			title: "Spaghetti",
			ingredients: ["flour", "water"],
			instructions: "Mix ingredients",
			img: "x.jpg"
		}]
	}
	render() {
		return(
			<div>
				{this.props.recipes.map((r, index) => (
					<Recipe key={index} {...r}/>
				))}
			</div>
			);
	}
}
/*
PropTypes: development time type checker for your props
npm install --save prop-types*/

// example prop-types
import PropTypes from 'prop-types';

class IngredientList extends Component {
	static propTypes = {
		ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
	}
	render() {
		return (
				<ul>
					{this.props.ingredients.map((ing, index) => (
						<li key={index}>{ing}</li>
						))}
				</ul>
			)
	}
}