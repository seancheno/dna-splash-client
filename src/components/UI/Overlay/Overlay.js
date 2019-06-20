import React from "react";
import classes from "./Overlay.module.css";

const Overlay = props => (
	<div className={props.show.showOverlay ? classes.Show : classes.Hide} />
);

export default Overlay;
