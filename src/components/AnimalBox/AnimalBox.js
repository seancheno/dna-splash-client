import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./AnimalBox.module.css";

import AnimatedTitle from "../UI/Text/AnimatedTitle/AnimatedTitle";
import AnimatedSubtitle from "../UI/Text/AnimatedSubtitle/AnimatedSubtitle";
import AnimalSelection from "./AnimalSelection/AnimalSelection";
import Overlay from "../UI/Overlay/Overlay";
import AnimalInfo from "./AnimalInfo/AnimalInfo";

class AnimalBox extends Component {
	componentDidMount = () => {
		if (this.props.showOverlay.showOverlay) {
			this.props.onShowOverlay();
		}
		this.props.onChosenAnimal(null);
	};

	render() {
		return (
			<div className={classes.AnimalBox}>
				<Overlay show={this.props.showOverlay} />
				<AnimalInfo animal={this.props.chosenAnimal.chosenAnimal} />
				<AnimatedTitle>Genome Coloring</AnimatedTitle>
				<AnimatedSubtitle>Pick an awesome species to begin</AnimatedSubtitle>
				<AnimalSelection />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		showOverlay: state,
		chosenAnimal: state
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onChosenAnimal: animal =>
			dispatch({ type: "CHOOSE_ANIMAL", animal: animal }),
		onShowOverlay: () => dispatch({ type: "TOGGLE_OVERLAY" })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AnimalBox);
