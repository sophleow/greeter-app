//import logo from "./logo.svg";
//import "./App.css";

import { useState } from "react";
import Intro from "./components/introduction";
import Welcome from "./components/welcome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import apple from "../assets/images/apples.jpeg";
import orange from "../assets/images/oranges.jpeg";

function HomeScreen() {
	//given the state a default value
	const [firstName, setFirstName] = useState(null);

	//expects an argument called "value" that contains first name
	//update the state called "firstname" using setFirstName function
	const handleChangeFirstName = (value) => {
		setFirstName(value);
	};

	return (
		<>
			{firstName ? (
				<Welcome fname={firstName} />
			) : (
				<Intro handleChange={handleChangeFirstName} />
			)}

			<Router>
				<Link to="/apple">Apple</Link> | <Link to="/orange">Orange</Link> |{" "}
				<Link to="/">None</Link>
				<br />
				<Switch>
					<Route path="/apple">
						<img src={apple} />
					</Route>
					<Route path="/orange">
						<img src={orange} />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default HomeScreen;
