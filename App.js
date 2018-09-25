import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends Component {
	state = {
		placeName: "",
		places: []
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

		this.setState(() => ({
			places: places.concat(placeName)
		}));
	};

	render() {
		const { placeName, places } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.placeInput}
						placeholder="An awesome place"
						value={this.state.placeName}
						onChangeText={this.handleInputChange}
					/>
					<Button
						title="Add"
						style={styles.placeButton}
						onPress={this.handleSubmitPlace}
					/>
				</View>
				<View style={styles.listContainer}>
					{places.map((place, i) => <ListItem key={i} placeName={place} />)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 26,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	inputContainer: {
		// flex: 1,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	placeInput: {
		width: "70%"
	},
	placeButton: {
		width: "30%"
	},
	listContainer: {
		width: "100%"
	}
});
