import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	StatusBar
} from "react-native";
import { connect } from "react-redux";
// actions
import {
	addPlace,
	deletePlace,
	selectPlace,
	deselectPlace
} from "../actions/index";
// reducers
import placesReducer from "../reducers/places";
// components
import AwesomeStatusBar from "./AwesomeStatusBar";
import DestinationList from "./DestinationList";
import DestinationForm from "./DestinationForm";
import SelectedPlace from "./SelectedPlace";

class Main extends Component {
	state = {
		places: [],
		selectedPlace: null // holds the place object the user clicks on
	};

	handleAddPlace = placeName => {
		const { places } = this.state;

		this.setState(() => ({
			places: places.concat({
				key: Math.random().toString(),
				value: placeName,
				image: {
					uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
				}
			})
		}));
	};

	// delete a place
	handleDeletePlace = () => {
		const { places, selectedPlace } = this.state;

		this.setState(() => ({
			places: places.filter(p => {
				return p.key !== selectedPlace.key;
			}),
			selectedPlace: null
		}));
	};

	// close modal
	handleCloseModal = () => {
		this.setState(() => ({
			selectedPlace: null
		}));
	};

	// save a selected place
	handleSelectPlace = key => {
		const { places } = this.state;
		this.setState(() => ({
			selectedPlace: places.find(p => {
				return p.key === key;
			})
		}));
	};

	render() {
		const { placeName, places, selectedPlace } = this.state;

		return (
			<View style={styles.container}>
				<AwesomeStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
				<SelectedPlace
					selectedPlace={selectedPlace}
					onItemDeleted={this.handleDeletePlace}
					onModalClosed={this.handleCloseModal}
				/>
				<DestinationForm addPlace={this.handleAddPlace} />
				<DestinationList
					places={places}
					deletePlace={this.handleDeletePlace}
					selectPlace={this.handleSelectPlace}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

const mapStateToProps = state => {
	const { places, selectedPlace } = state.places;

	return {
		places: places,
		selectedPlace: selectedPlace
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addPlace: placeName => dispatch(addPlace(placeName)),
		deletePlace: () => dispatch(deletePlace()),
		selectPlace: key => dispatch(selectedPlace(key)),
		deselectPlace: () => dispatch(deselectPlace())
	};
};

export default Main;
