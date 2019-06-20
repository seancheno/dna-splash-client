import React, { Component } from "react";
import classes from "./ImageCanvas.module.css";

class ImageCanvas extends Component {
	state = {
		canvas: {},
		ctx: null,
		imageData: null
	};

	fire = () => {
		let img = new Image();
		img.crossOrigin = "Anonymous";
		img.src = `https://s3.us-east-2.amazonaws.com/dnawebapp/${
			this.props.uuid
		}.png`;
		img.onload = () => {
			this.draw(img);
		};
	};

	draw = img => {
		let canvas = document.getElementById("canvas");
		let div = document.getElementById("ImageCanvas");
		canvas.width = div.clientWidth;
		canvas.height = div.clientHeight;

		let ctx = canvas.getContext("2d");
		this.setState({ ctx: ctx, canvas: canvas });

		ctx.drawImage(img, 0, 0);

		img.style.display = "none";

		let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		this.setState({ imageData: imageData, loaded: true });
	};

	invert = canvas => {
		let imageData = this.state.imageData;
		let data = imageData.data;

		for (let i = 0; i < data.length; i += 4) {
			data[i] = 255 - data[i]; // red
			data[i + 1] = 255 - data[i + 1]; // green
			data[i + 2] = 255 - data[i + 2]; // blue
		}
		let ctx = canvas.getContext("2d");
		ctx.putImageData(imageData, 0, 0);
	};

	threshold = canvas => {
		this.handleClick();
		let imageData = this.state.imageData;
		let data = imageData.data;

		for (let i = 0; i < data.length; i += 4) {
			let r = data[i];
			let g = data[i + 1];
			let b = data[i + 2];
			let v = 0.2126 * r + 0.7152 * g + 0.0722 * b >= 150 ? 255 : 0;
			data[i] = data[i + 1] = data[i + 2] = v;
		}

		let ctx = canvas.getContext("2d");
		ctx.putImageData(imageData, 0, 0);
	};

	brightness = (canvas, adjustment) => {
		this.handleClick();
		let imageData = this.state.imageData;
		let data = imageData.data;

		for (let i = 0; i < data.length; i += 4) {
			data[i] += adjustment;
			data[i + 1] += adjustment;
			data[i + 2] += adjustment;
		}

		let ctx = canvas.getContext("2d");
		ctx.putImageData(imageData, 0, 0);
	};

	handleClick = () => {
		let currentState = this.state.clicked;
		this.setState({ clicked: !currentState });
	};

	componentDidMount = () => {
		this.fire();
	};

	render() {
		return (
			<>
				<div onClick={this.props.click} className={classes.ZoomOverlay}>
					<div className={classes.ZoomIcon} />
				</div>
				<div
					id="ImageCanvas"
					className={classes.ImageCanvas}
					onClick={this.props.click}
				>
					<canvas
						id="canvas"
						ref={ref => {
							this.canvas = ref;
						}}
					/>
				</div>
			</>
		);
	}
}

export default ImageCanvas;
