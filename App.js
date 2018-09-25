import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends Component {
	state = {
		placeName: ""
	};

	// save input changes to state
	handleInputChange = val => {
		this.setState(() => ({
			placeName: val,
			places: []
		}));
	};

	render() {
		const { placeName, places } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={{ width: 300 }}
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
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
