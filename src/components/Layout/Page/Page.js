import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import asyncComponent from "../../../hoc/asyncComponent"
import classes from "./Page.module.css";

import AnimalBox from "../../AnimalBox/AnimalBox";
// import Builder from "../../Builder/Builder";
// import Gallery from "../../Gallery/Gallery";
// import About from "../../About/About";

import { AnimatedSwitch } from "react-router-transition";

const asyncBuilder = asyncComponent(() => {
	return import ("../../Builder/Builder");
})

const asyncGallery = asyncComponent(() => {
	return import ("../../Gallery/Gallery");
})

const asyncAbout = asyncComponent(() => {
	return import ("../../About/About");
})

class Page extends Component {
	render() {
		let divStyle = null;
		if (this.props.location.pathname === "/gallery") {
			divStyle = { backgroundColor: "#eee" };
		}

		return (
			<div id={"page"} className={classes.Page} style={divStyle}>
				<AnimatedSwitch
					atEnter={{ opacity: 0 }}
					atLeave={{ opacity: 1 }}
					atActive={{ opacity: 1 }}
					className="switch-wrapper"
				>
					<Route exact path="/" component={AnimalBox} />
					<Route exact path="/builder" component={asyncBuilder} />
					<Route exact path="/gallery" component={asyncGallery} />
					<Route exact path="/about" component={asyncAbout} />
				</AnimatedSwitch>
			</div>
		);
	}
}

export default withRouter(Page);
