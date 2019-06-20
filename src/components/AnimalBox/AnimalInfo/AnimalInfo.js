import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./AnimalInfo.module.css";

import animalMap from "./Utils";
import AnimatedTitle from "../../UI/Text/AnimatedTitle/AnimatedTitle";
import AnimalData from "./AnimalData/AnimalData";
import CheckMark from "../../UI/Buttons/CheckMark/CheckMark";

class AnimalInfo extends Component {
	clickHandler = () => {
		this.props.onShowOverlay();
	};
	
	backHandler = () => {
		this.props.onShowOverlay();
		this.props.onChosenAnimal(null);
	};

	render() {
		let animal = animalMap(this.props.chosenAnimal.chosenAnimal);

		let attachedClasses = [classes.AnimalInfo, classes.Close];
		if (this.props.chosenAnimal.chosenAnimal != null) {
			attachedClasses = [classes.AnimalInfo, classes.Open];
		}
		
		return (
			<div className={attachedClasses.join(" ")}>
				<AnimatedTitle style={{ textAlign: "left" }}>
					{animal.name}{" "}
					<span className={classes.SpeciesText}>{animal.speciesName}</span>
				</AnimatedTitle>
				<div className={classes.InnerWrapper}>
					<div className={classes.RightCol}>
						<AnimalData
							color={"#ffd202"}
							icon={"dna"}
							text={animal.chromosomes}
							subtext={"Chromo."}
						/>
						<AnimalData
							color={"#54d293"}
							icon={"dna"}
							text={animal.pairs}
							subtext={"Basepairs"}
						/>
						<AnimalData
							color={"#9c79cd"}
							icon={"dna"}
							text={animal.origin}
							subtext={"Origin"}
						/>
						<AnimalData
							color={"#57c6e4"}
							icon={"dna"}
							text={animal.status}
							subtext={"Status"}
						/>
					</div>
					<div className={classes.LeftCol}>
						<div onClick={this.clickHandler}>
							<CheckMark color={"#58da7d"} icon={"check"} link={"/builder"}>
								Continue
							</CheckMark>
						</div>
					</div>
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
)(AnimalInfo);
