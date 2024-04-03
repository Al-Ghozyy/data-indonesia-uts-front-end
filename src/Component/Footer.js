import { Component } from "react";
import "./Footer.css"

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<h3>Copyrights &copy; 2024 Developed By {this.props.nama}</h3>
				<span>Make with &10084</span>
			</footer>
		);
	}
}

export default Footer;