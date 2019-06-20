import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Builder.module.css";

import Controls from "./Controls/Controls";
import ImageBox from "./ImageBox/ImageBox";
import AnimalSVG from "../SVG/AnimalSVG/AnimalSVG";

class Builder extends Component {
	render() {
		return (
			<div className={classes.Wrapper}>
				<div className={classes.AnimalWrapper}>
					<AnimalSVG
						id={this.props.chosenAnimal.chosenAnimal}
						name={this.props.chosenAnimal.chosenAnimal}
						clicked={true}
					/>
				</div>
				<div className={classes.Builder}>
					<Controls />
					<ImageBox />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		chosenAnimal: state
	};
};

export default connect(
	mapStateToProps,
	null
)(Builder);
