import React from "react";
import classes from "./UploadButton.module.css";

const uploadButton = props => (
	<div className={classes.UploadButton}>{props.children}</div>
);

export default uploadButton;
