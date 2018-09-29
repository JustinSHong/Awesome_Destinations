import {
	ADD_PLACE,
	DELETE_PLACE,
	SELECT_PLACE,
	DESELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
	places: [],
	selectedPlace: null
};

const placesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PLACE:
			return {
				...state,
				places: state.places.concat({
					key: Math.random(),
					name: action.placeName,
					image: {
						uri:
							"https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
					}
				})
			};
		case DELETE_PLACE:
			return {
				...state,
				places: state.places.filter(p => {
					return p.key !== state.selectedPlace.key;
				})
			};
		case SELECT_PLACE:
			return {
				...state,
				selectedPlace: state.places.find(place => {
					return place.key === action.key;
				})
			};
		default:
			return state;
	}
};

export default placesReducer;
