import React from "react";
import { Link } from "react-router-dom";
import classes from "./CheckMark.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const checkMark = props => (
	<Link to={props.link}>
		<div className={classes.Button}>
			<FontAwesomeIcon style={{ color: props.color }} icon={props.icon} />
			<span style={{ marginLeft: "4px" }}>Continue</span>
		</div>
	</Link>
);

export default checkMark;
