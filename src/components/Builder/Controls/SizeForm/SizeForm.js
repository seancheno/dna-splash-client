import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./SizeForm.module.css";

class SizeForm extends Component {
	handleKeyPress = e => {
		this.props.onSetDimmensions(
			this.props.dimmension,
			parseInt(e.target.value, 10)
		);
	};

	render() {
		return (
			<form className={classes.SizeForm}>
				<label>
					<span>{this.props.children}</span>
					<input
						onChange={this.handleKeyPress}
						className={classes.Input}
						type="number"
						name="name"
						value={this.props.defaultValue}
					/>
				</label>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		dimmensions: state
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetDimmensions: (dimmension, value) =>
			dispatch({ type: "SET_DIMMENSIONS", payload: { dimmension, value } })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SizeForm);
