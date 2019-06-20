import React from "react";
import classes from "./AnimalData.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const animalData = props => (
	<div className={classes.AnimalData}>
		<div className={classes.Line} style={{ backgroundColor: props.color }} />

		<div
			className={classes.FontAwesome}
			style={{ backgroundColor: props.color }}
		>
			<FontAwesomeIcon
				icon={props.icon}
				style={{ transform: "translate(13px,6px)" }}
			/>
		</div>

		<h3 className={classes.Text}>
			{props.subtext}
			<br />
			<span style={{ fontWeight: 100 }}>{props.text}</span>
		</h3>
	</div>
);

export default animalData;
