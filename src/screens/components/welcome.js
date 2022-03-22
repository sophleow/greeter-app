import { Component } from "react";

class Welcome extends Component {
	constructor() {
		super();
	}

	render() {
		return <div>Hello there, {this.props.fname}!</div>;
	}
}

export default Welcome;
