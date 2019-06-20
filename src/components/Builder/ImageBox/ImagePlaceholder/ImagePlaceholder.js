import React, { Component } from "react";
import classes from "./ImagePlaceholder.module.css";

class ImagePlaceholder extends Component {
	render() {
		return (
			<div className={classes.ImagePlaceholder}>
				<div className={classes.Text}>Preview</div>
			</div>
		);
	}
}

export default ImagePlaceholder;
