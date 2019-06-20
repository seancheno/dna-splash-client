import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./AnimalSelection.module.css";

import { ANIMALS } from "../../../constants/index";

import Animal from "./Animal/Animal";

class AnimalSelection extends Component {
	render() {
		let attachedClasses = [classes.AnimalSelection];
		if (this.props.showOverlay.showOverlay) {
			attachedClasses = [classes.AnimalSelection, classes.Open];
		}

		let animals = ANIMALS.map(animal => {
			return <Animal id={animal} key={animal} name={animal} />;
		});

		return (
			<>
				<div className={attachedClasses.join(" ")}>{animals} </div>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		showOverlay: state
	};
};

export default connect(
	mapStateToProps,
	null
)(AnimalSelection);
