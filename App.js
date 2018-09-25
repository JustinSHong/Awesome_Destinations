import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends Component {
	state = {
		placeName: ""
	};

	// save input changes to state
	handleInputChange = val => {
		this.setState(() => ({
			placeName: val
		}));
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={{ width: 300 }}
					placeholder="An awesome place"
					value={this.state.placeName}
					onChangeText={this.handleInputChange}
				/>
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
