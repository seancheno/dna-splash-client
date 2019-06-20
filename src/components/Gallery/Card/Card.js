import React, { Component } from "react";
import classes from "./Card.module.css";

import ImagePreview from "../../Builder/ImageBox/ImagePreview/ImagePreview";
import CardInfo from "./CardInfo/CardInfo";

class Card extends Component {
	state = {
		active: false
	};

	hoverOn = () => {
		this.setState({ active: true });
	};

	hoverOff = () => {
		this.setState({ active: false });
	};
	render() {
		let divStyle = {
			backgroundImage: `url("${this.props.data.image_url}")`
		};
		return (
			<div
				className={classes.Card}
				style={divStyle}
				onMouseEnter={() => this.hoverOn()}
				onMouseLeave={() => this.hoverOff()}
			>
				<ImagePreview imgUrl={this.props.data.image_url} animate={false} />
				<CardInfo data={this.props.data} active={this.state.active} />
			</div>
		);
	}
}

export default Card;
