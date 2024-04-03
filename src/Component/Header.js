/** @format */
import { Navlink } from "reaxt-router-dom";
import "./Navbar.css";

const Header = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Navlink to={"/"}>Home</Navlink>
				</li>
				<li>
					<Navlink to={"/"}>Form</Navlink>
				</li>
				<li>
					<Navlink to={"/"}>Demo</Navlink>
				</li>
			</ul>
		</nav>
	);
};

export default Header;