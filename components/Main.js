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
	handleAddPlace = placeName => {
		this.props.dispatchAddPlace(placeName);
	};

	// delete a place
	handleDeletePlace = () => {
		this.props.dispatchDeletePlace();
	};

	// close modal
	handleCloseModal = () => {
		this.props.dispatchDeselectPlace();
	};

	// save a selected place
	handleSelectPlace = key => {
		this.props.dispatchSelectPlace(key);
	};

	render() {
		const { places } = this.props;
		const { selectedPlace } = this.props.places;

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
	return {
		places: state.places.places,
		selectedPlace: state.places.selectedPlace
	};
};

const mapDispatchToProps = dispatch => {
	return {
		dispatchAddPlace: placeName => dispatch(addPlace(placeName)),
		dispatchDeletePlace: () => dispatch(deletePlace()),
		dispatchSelectPlace: key => dispatch(selectedPlace(key)),
		dispatchDeselectPlace: () => dispatch(deselectPlace())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
