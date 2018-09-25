import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	StatusBar
} from "react-native";
import { Constants } from "expo";

function AwesomeStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar
				// translucent={false}
				backgroundColor={backgroundColor}
				{...props}
			/>
		</View>
	);
}

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
				<AwesomeStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
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
		flex: 1
		// padding: 26,
		// backgroundColor: "",
		// alignItems: "center",
		// justifyContent: "flex-start"
	},
	inputContainer: {
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
