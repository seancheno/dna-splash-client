import React from "react";
import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

import logoLight from "../../../assets/images/logo-light.png";
import logoDark from "../../../assets/images/logo-dark.png";

const logo = props => (
	<Link to="/">
		<div className={classes.Logo} style={ props.location === 'sidedrawer' ? {marginTop: '6px'} : null }>
			<img src={props.color === 'light' ? logoLight : logoDark} alt="DNA Splash" />
		</div>
	</Link>
);

export default logo;
