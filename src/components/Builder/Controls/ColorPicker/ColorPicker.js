import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./ColorPicker.module.css";

import { ChromePicker } from "react-color";

class ColorPicker extends Component {
	state = {
		displayColorPicker: false,
		color: {
			r: Math.floor(Math.random() * 255) + 1,
			g: Math.floor(Math.random() * 255) + 1,
			b: Math.floor(Math.random() * 255) + 1,
			a: 1
		},
		hex: null
	};

	handleClick = () => {
		this.setState({ displayColorPicker: !this.state.displayColorPicker });
	};

	handleClose = () => {
		this.setState({ displayColorPicker: false });
	};

	handleChange = color => {
		this.setState({ color: color.rgb, hex: color.hex });
		this.props.onSetColorValue(this.props.basePair, color.hex);
	};

	componentDidMount = () => {
		const rgbHex = require("rgb-hex");
		let hex = rgbHex(
			this.state.color.r,
			this.state.color.g,
			this.state.color.b
		);
		this.props.onSetColorValue(this.props.basePair, `#${hex}`);
	};

	render() {
		const color = `rgba(${this.state.color.r}, ${this.state.color.g}, ${
			this.state.color.b
		}, ${this.state.color.a}`;

		const popover = {
			position: "absolute",
			zIndex: "2"
		};

		const cover = {
			position: "fixed",
			top: "0px",
			right: "0px",
			bottom: "0px",
			left: "0px"
		};

		return (
			<div
				style={{
					WebkitTextStrokeColor: color,
					color: color,
					borderColor: color
				}}
				className={classes.ColorPicker}
			>
				<div className={classes.CircleWrap} onClick={this.handleClick}>
					<div className={classes.Circle} onClick={this.handleClick}>
						<div className={classes.textSVG}>{this.props.basePair}</div>
					</div>
				</div>
				{this.state.displayColorPicker ? (
					<div style={popover}>
						<div style={cover} onClick={this.handleClose} />
						<ChromePicker
							className={classes.Picker}
							color={this.state.color}
							onChange={this.handleChange}
						/>
					</div>
				) : null}
				<h5 style={{ color: this.state.hex }}>{`${this.state.color.r}, ${
					this.state.color.g
				}, ${this.state.color.b}`}</h5>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSetColorValue: (basePair, colorHex) =>
			dispatch({ type: "SET_COLOR_VALUES", payload: { basePair, colorHex } })
	};
};

export default connect(
	null,
	mapDispatchToProps
)(ColorPicker);
