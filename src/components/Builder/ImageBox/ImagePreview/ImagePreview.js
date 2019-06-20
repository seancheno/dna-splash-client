import React, { Component } from "react";
import classes from "./ImagePreview.module.css";

import ImgsViewer from "react-images-viewer";
import ReactImageMagnify from "react-image-magnify";

import "./ImagePreview.css";

class ImagePreview extends Component {
	state = {
		currImg: 1,
		viewerIsOpen: false
	};

	gotoPrevious = () => {
		this.setState({ currImg: this.state.currImg - 1 });
	};

	gotoNext = () => {
		this.setState({ currImg: this.state.currImg + 1 });
	};

	closeViewer = () => {
		this.setState({ viewerIsOpen: false });
	};

	openViewer = () => {
		this.setState({ viewerIsOpen: true });
	};

	render() {
		let divStyle = {
			animationDuration: "0s",
			animationDelay: "0s"
		};

		return (
			<>
				<div
					className={classes.ImagePreview}
					style={!this.props.animate ? divStyle : null}
					onClick={this.openViewer}
				>
					<ReactImageMagnify
						{...{
							smallImage: {
								alt: "Wristwatch by Ted Baker London",
								isFluidWidth: true,
								src: this.props.imgUrl,
								width: 1420,
								height: 1400
							},
							largeImage: {
								src: this.props.imgUrl,
								isFluidWidth: true,

								width: 1920,
								height: 1080
							},
							enlargedImagePosition: "over",
							style: { transform: "scaleY(1.6)", width: "500px" }
						}}
					/>

					<div className={classes.ImgsViewerWrapper}>
						<ImgsViewer
							imgs={[
								{
									src: `http://google.com`
								},
								{
									src: this.props.imgUrl
								}
							]}
							currImg={this.state.currImg}
							isOpen={this.state.viewerIsOpen}
							onClickPrev={this.gotoPrevious}
							onClickNext={this.gotoNext}
							onClose={this.closeViewer}
							backdropCloseable={true}
							showImgCount={false}
						/>
					</div>
				</div>
			</>
		);
	}
}

export default ImagePreview;
