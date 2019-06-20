import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./ImageBox.module.css";

import { S3_BUCKET_URL } from "../../../config";

import axios from "../../../axios";
import uuid from "uuid";

import ImagePreview from "./ImagePreview/ImagePreview";
import ImagePlaceholder from "./ImagePlaceholder/ImagePlaceholder";
import gif from "../../../assets/gifs/loading.gif";

class ImageBox extends Component {
	state = {
		dataLoaded: false,
		dataLoading: false,
		data: null,
		uuid: uuid.v4().substring(0, 8)
	};

	postDataHandler = () => {
		if (!this.state.dataLoading) {
			this.setState({ dataLoading: true, dataLoaded: false });

			if (this.state.dataLoaded) {
				this.setState({ uuid: uuid.v4().substring(0, 8) });
			}

			const data = {
				chosenAnimal: this.props.chosenAnimal.chosenAnimal,
				sliderValue: this.props.sliderValue.sliderValue,
				colorValues: this.props.colorValues.colorValues,
				dimmensions: this.props.dimmensions.dimmensions,
				uuid: this.state.uuid,
				imageUrl: `${S3_BUCKET_URL}${
					this.state.uuid
				}.png`,

				date: Date.now()
			};

			axios
				.post("/create", data)
				.then(response => {})
				.then(response => {
					this.setState({
						dataLoaded: true,
						dataLoading: false,
						changed: false,
						data: data
					});
				});
		}
	};

	componentDidMount = () => {
		let animal = this.props.chosenAnimal.chosenAnimal;
		if (!this.props.chosenAnimal.chosenAnimal) {
			this.props.onChosenAnimal("human");
		}
	};

	render() {
		let image = <ImagePlaceholder />;
		let download = "Download";
		if (this.state.dataLoading === true) {
			image = <img className={classes.GifLoader} src={gif} alt="loading..." />;
		}
		if (this.state.dataLoaded === true) {
			let imgUrl = `https://s3.us-east-2.amazonaws.com/dnawebapp/${
				this.state.data.uuid
			}.png`;
			image = <ImagePreview imgUrl={imgUrl} animate={true} />;
			download = (
				<a href={imgUrl} target="_blank" download>
					Download
				</a>
			);
		}

		let attachedClasses = [classes.DownloadButton];
		if (this.state.dataLoaded) {
			attachedClasses = [classes.DownloadButton, classes.Active];
		}

		return (
			<div className={classes.ImageBox}>
				{image}
				<div className={classes.ButtonWrap}>
					<button className={attachedClasses.join(" ")}>{download}</button>
					<button
						className={classes.GenerateButton}
						onClick={!this.state.dataLoading ? this.postDataHandler : null}
					>
						Generate
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		chosenAnimal: state,
		sliderValue: state,
		colorValues: state,
		dimmensions: state
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onChosenAnimal: animal =>
			dispatch({ type: "CHOOSE_ANIMAL", animal: animal })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ImageBox);
