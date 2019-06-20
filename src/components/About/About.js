import React from "react";
import classes from "./About.module.scss";

import DnaSpinner from "../UI/misc/DnaSpinner/DnaSpinner";

const About = props => {
	function importAll(r) {
		return r.keys().map(r);
	}

	const images = importAll(
		require.context("../../assets/images/tech", false, /\.(png|jpe?g|svg)$/)
	);
	const imageNames = ["AWS", "Docker", "Flask", "Postgres", "React"];
	const imageList = images.map((image, i) => {
		return (
			<div
				style={{ animationDelay: `${i * 0.05 + 0.6}s` }}
				className={classes.ImageTextWrap}
			>
				<img src={image} alt={"dna-colored"} />
				<p>{imageNames[i]}</p>
			</div>
		);
	});

	return (
		<div className={classes.About}>
			<div className={classes.Columns}>
				<div className={classes.ColumnThick}>
					<h2>Why?</h2>
					<h3>
						sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation quat.?
					</h3>
				</div>
				<div className={classes.ColumnThin}>
					<div className={classes.DnaSpinnerWrapper}>
						<DnaSpinner />
					</div>
				</div>
				<div className={classes.ColumnThick}>
					<h2>How?</h2>
					<h3>
						sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation quat.?
					</h3>
				</div>
			</div>
			<div className={classes.ImageColumn}>{imageList}</div>
		</div>
	);
};

export default About;
