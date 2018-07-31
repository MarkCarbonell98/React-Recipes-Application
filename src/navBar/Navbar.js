import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
	render() {
		const {apptitle} = this.props;
		const  navlinks = this.props.navlinks.map((nav, index) => (
			<a key={index}>{nav}</a>
			));
		return(
			<div className="main-navbar">
				<div className="title-div">
					<h2 className="title">{apptitle}</h2>
				</div>
				<div className="links">
					{navlinks}
				</div>
			</div>
		);
	}
}

export default Navbar;