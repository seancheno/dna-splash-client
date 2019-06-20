import React, { Component } from "react";

import classes from "./Controls.module.css";

import Slider from "./Slider/Slider";
import ColorPicker from "./ColorPicker/ColorPicker";
import SizeForm from "./SizeForm/SizeForm";

class Controls extends Component {
	render() {
		return (
			<div className={classes.Controls}>
				<h1>
					Chromosome Location<span>Pick the starting base pair to beegin</span>
				</h1>

				<Slider />

				<h1>
					Color Values<span>Assign custom color values to each base pair</span>
				</h1>
				<div className={classes.ColorWrap}>
					<ColorPicker basePair={"A"} color={"#888"}>
						BUTTON
					</ColorPicker>
					<ColorPicker basePair={"C"} color={"#888"}>
						BUTTON
					</ColorPicker>
					<ColorPicker basePair={"G"} color={"#888"}>
						BUTTON
					</ColorPicker>
					<ColorPicker basePair={"T"} color={"#888"}>
						BUTTON
					</ColorPicker>
				</div>
				<div className={classes.ImageDimWrap}>
					<h1>Dimmensions</h1>
					<SizeForm dimmension={"width"} defaultValue={1280}>
						Width
					</SizeForm>
					<SizeForm dimmension={"height"} defaultValue={720}>
						Height
					</SizeForm>
				</div>
			</div>
		);
	}
}

export default Controls;
