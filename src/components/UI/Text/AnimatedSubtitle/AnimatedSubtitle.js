import React from "react";
import classes from "./AnimatedSubtitle.module.css";

const animatedSubtitle = props => (
	<div style={props.style} className={classes.AnimatedSubtitle}>
		{props.children}
	</div>
);

export default animatedSubtitle;
