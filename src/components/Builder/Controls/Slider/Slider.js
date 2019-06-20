import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Slider.module.css";

import { ANIMAL_BASE_PAIR_COUNTS } from "../../../../constants/index";

import Tooltip from "rc-tooltip";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./Slider.css";


const Handle = Slider.Handle;

const railStyle = {
	background:
		"-webkit-linear-gradient(left, #f6d953 0%,#d6f653 8%,#b3f653 14%,#53e0f6 22%,#f6539d 35%,#a4e18c 47%,#8ca9e1 57%,#f76b62 66%,#f7a262 74%,#53f68f 83%,#d253f6 89%,#e1dd8c 94%,#8ce1d8 100%)"
};

const trackStyle = {
	backgroundColor: "#ffffff00"
};

const handleStyle = {
	width: "24px",
	height: "24px",
	top: "0px"
};

const handle = props => {
	const { value, dragging, index, ...restProps } = props;
	return (
		<Tooltip
			prefixCls="rc-slider-tooltip"
			overlay={value}
			visible={true}
			placement="top"
			key={index}
		>
			<Handle {...restProps} />
		</Tooltip>
	);
};

class DnaSlider extends Component {
	getMaxValue = animal => {
		const value = ANIMAL_BASE_PAIR_COUNTS[animal];
		return value;
	};

	render() {
		return (
			<div className={classes.Slider}>
				<Slider
					railStyle={railStyle}
					handleStyle={handleStyle}
					trackStyle={trackStyle}
					min={0}
					max={2000000}
					defaultValue={Math.floor(Math.random() * 2000000)}
					handle={handle}
					onAfterChange={defaultValue =>
						this.props.onSetSliderValue(defaultValue)
					}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		sliderValue: state,
		chosenAnimal: state
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetSliderValue: value =>
			dispatch({ type: "SET_SLIDER_VALUE", payload: value })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DnaSlider);
