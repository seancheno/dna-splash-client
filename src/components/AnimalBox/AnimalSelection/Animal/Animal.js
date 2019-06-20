import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Animal.module.css";

import AnimalSVG from "../../../SVG/AnimalSVG/AnimalSVG";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Animal extends Component {
	state = {
		clicked: false,
		translateX: null,
		translateY: null,
		scale: "2.7"
	};

	clickHandler = () => {
		const currentState = this.state.clicked;
		this.setState({ clicked: !currentState });
		this.transformAnimal();
		this.props.onShowOverlay();
	};

	transformAnimal = () => {
		let div = document.getElementById(this.props.id);
		let bodyRect = document.body.getBoundingClientRect();
		let elemRect = div.getBoundingClientRect();
		let widthOffset = bodyRect.left - elemRect.left + 310;
		let heightOffset = bodyRect.top - elemRect.top + 220;
		let scale = 2.7;

		if (bodyRect.width < 1050) {
			widthOffset = bodyRect.left - elemRect.left + 190;
		}

		if (bodyRect.width < 600) {
			widthOffset = bodyRect.left - elemRect.left + 180;
			heightOffset = bodyRect.top - elemRect.top + 530;
			scale = 3.5;
		}

		this.setState({
			translateX: widthOffset,
			translateY: heightOffset,
			scale: scale
		});

		let chosen = this.props.chosenAnimal.chosenAnimal === null ? div.id : null;
		this.props.onChosenAnimal(chosen);
	};

	render() {
		let divStyle = {
			transform: `translate(${this.state.translateX}px,${
				this.state.translateY
			}px) scale(${this.state.scale})`,
			zIndex: 2
		};

		let attachedClasses = [classes.Animal, classes.Close];
		if (this.state.clicked) {
			attachedClasses = [classes.Animal, classes.Open];
		}

		return (
			<div
				id="Animal"
				style={this.state.clicked ? divStyle : null}
				className={attachedClasses.join(" ")}
				onClick={this.clickHandler}
			>
				<div
					className={
						this.state.clicked ? classes.BackButton : classes.BackButtonHidden
					}
				>
					<FontAwesomeIcon
						icon={"arrow-alt-circle-left"}
						className={classes.BackArrow}
					/>
				</div>
				<AnimalSVG name={this.props.name} clicked={this.state.clicked} />
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
		onShowOverlay: () => dispatch({ type: "TOGGLE_OVERLAY" }),
		onChosenAnimal: animal =>
			dispatch({ type: "CHOOSE_ANIMAL", animal: animal })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Animal);
