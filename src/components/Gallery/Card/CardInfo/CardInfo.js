import React from "react";
import classes from "./CardInfo.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardInfo = props => {
	let attachedClasses = [classes.CardInfo];
	if (props.active) {
		attachedClasses = [classes.CardInfo, classes.Active];
	}

	let color_dots = props.data.color_values.map((color, i) => {
		return (
			<div
				key={i} style={{ backgroundColor: props.data.color_values[i] }}
				className={classes.Color}
			/>
		);
	});

	return (
		<div className={attachedClasses.join(" ")}>
			<div className={classes.TextWrapper}>
				<h2>{props.data.animal}</h2>
				<h3>{props.data.date}</h3>
			</div>
			<div className={classes.ColorWrapper}>{color_dots}</div>
			<button>
				{" "}
				<FontAwesomeIcon icon={"long-arrow-alt-down"} />{" "}
				<a href={props.data.image_url} target="_blank" download>
					Download
				</a>
			</button>
		</div>
	);
};
export default cardInfo;
