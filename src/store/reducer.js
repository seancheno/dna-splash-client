/* eslint-disable default-case */
const initialState = {
	showOverlay: false,
	chosenAnimal: null,
	sliderValue: 100,
	colorValues: {
		A: "#eee",
		C: "#eee",
		G: "#eee",
		T: "#eee"
	},
	dimmensions: {
		width: 1280,
		height: 720
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "TOGGLE_OVERLAY":
			return {
				...state,
				showOverlay: !state.showOverlay
			};
		case "CHOOSE_ANIMAL":
			return {
				...state,
				chosenAnimal: action.animal
			};
		case "SET_SLIDER_VALUE":
			return {
				...state,
				sliderValue: action.payload
			};
		case "SET_COLOR_VALUES":
			return {
				...state,
				colorValues: {
					...state.colorValues,
					[action.payload.basePair]: action.payload.colorHex
				}
			};
		case "SET_DIMMENSIONS":
			return {
				...state,
				dimmensions: {
					...state.dimmensions,
					[action.payload.dimmension]: action.payload.value
				}
			};
	}
	return state;
};

export default reducer;
