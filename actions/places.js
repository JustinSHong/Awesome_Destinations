import {
	ADD_PLACE,
	DELETE_PLACE,
	SELECT_PLACE,
	DESELECT_PLACE
} from "./actionTypes";

export const addPlace = placeName => {
	return {
		type: ADD_PLACE,
		placeName: placeName
	};
};