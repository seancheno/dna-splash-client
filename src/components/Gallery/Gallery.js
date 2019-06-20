import React, { Component } from "react";
import classes from "./Gallery.module.css";

import ScrollUpButton from "react-scroll-up-button";
import axios from "../../axios";

import Card from "./Card/Card";
import AnimalSVG from "../SVG/AnimalSVG/AnimalSVG";
import { ANIMALS } from "../../constants/index";

class Gallery extends Component {
	state = {
		data: null,
		filteredData: null,
		currentPage: 1,
		animalChosen: null
	};

	componentDidMount() {
		axios.get("/gallery").then(response => {
			this.setState({
				data: response.data,
				filteredData: response.data
			});
		});
		window.addEventListener("scroll", this.onScroll);
	}

	onScroll = () => {
		if (
			window.innerHeight + (window.scrollY + 50) >=
			document.body.offsetHeight
		) {
			this.setState(prevState => {
				return { currentPage: prevState.currentPage + 1 };
			});
		}
	};

	filteredDataHandler = animal => {
		const filtered = Object.keys(this.state.data)
			.filter(key => animal.includes(this.state.data[key].animal))
			.reduce((obj, key) => {
				obj[key] = this.state.data[key];

				return obj.filter(n => n);
			}, []);

		this.setState({
			filteredData: filtered,
			animalChosen: animal
		});
	};

	render() {
		if (this.state.data == null) {
			return (
				<div style={{ margin: "10% 0% 0% 0%", paddingBottom: "90vw" }}>
					<img src="https://loading.io/spinners/swing/lg.ball-swing-preloader-gif.gif" />
				</div>
			);
		} else {
			let data = this.state.data;
			if (this.state.filteredData) {
				data = this.state.filteredData;
			}

			let paginatedData = data.slice(0, this.state.currentPage * 9 + 9);
			const cards = Object.keys(paginatedData).map((data, i) => {
				return (
					<li key={i} style={{ animationDelay: `${i * 0.05}s` }}>
						<Card data={this.state.filteredData[i]} />
					</li>
				);
			});

			let animalList = ANIMALS.map((animal, i) => {
				return (
					<li
						key={i}
						onClick={() => this.filteredDataHandler(animal)}
						style={{
							boxShadow:
								this.state.animalChosen === animal
									? "0px 1px 10px #888888"
									: "none"
						}}
					>
						<AnimalSVG name={animal} clicked={true} />
					</li>
				);
			});
			return (
				<div className={classes.Gallery}>
					<ul className={classes.AnimalList}>{animalList}</ul>
					<ScrollUpButton ContainerClassName={classes.Scroller} />
					<ul>{cards}</ul>
				</div>
			);
		}
	}
}

export default Gallery;
