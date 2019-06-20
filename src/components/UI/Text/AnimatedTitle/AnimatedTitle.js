import React from "react";
import classes from "./AnimatedTitle.module.css";

const animatedTitle = props => (
	<div style={props.style} className={classes.AnimatedTitle}>
		{props.children}
	</div>
);

export default animatedTitle;
