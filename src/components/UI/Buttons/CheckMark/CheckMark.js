import React from "react";
import { Link } from "react-router-dom";
import classes from "./CheckMark.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const checkMark = props => (
	<Link to={props.link}>
		<div className={classes.Wrapper}>
			<div className={classes.Container}>
				<div className={classes.Text}>{props.children}</div>
				<div className={classes.Arrow}>
					<FontAwesomeIcon style={{ color: props.color }} icon={props.icon} />
				</div>
			</div>
		</div>
	</Link>
);

export default checkMark;
