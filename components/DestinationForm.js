import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";

// renders the input form
class DestinationForm extends Component {
	state = {
		placeName: ""
	};

	// save input changes to state
	handleInputChange = val => {
		this.setState(() => ({
			placeName: val
		}));
	};

	// save a place to state
	handleSubmitPlace = () => {
		const { placeName, places } = this.state;
		if (placeName.trim() === "") {
			return;
		}

		this.props.addPlace(placeName);
	};

	render() {
		const { placeName } = this.state;
		return (
			<View>
				<TextInput
					// style={styles.placeInput}
					placeholder="An awesome place"
					value={placeName}
					onChangeText={this.handleInputChange}
				/>
				<Button
					title="Add"
					// style={styles.placeButton}
					onPress={this.handleSubmitPlace}
				/>
			</View>
		);
	}
}

export default DestinationForm;
