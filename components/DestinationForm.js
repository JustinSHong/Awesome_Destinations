import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

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
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="An awesome place"
					value={placeName}
					onChangeText={this.handleInputChange}
				/>
				<Button
					title="Add"
					style={styles.button}
					onPress={this.handleSubmitPlace}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputContainer: {
		width: "100%",
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	input: {
		width: "70%"
	},
	button: {
		width: "30%"
	}
});

export default DestinationForm;
