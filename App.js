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
import DestinationList from "./components/DestinationList";
import DestinationForm from "./components/DestinationForm";

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
		places: []
	};

	handleAddPlace = placeName => {
		const { places } = this.state;

		this.setState(() => ({ places: places.concat(placeName) }));
	};

	render() {
		const { placeName, places } = this.state;
		return (
			<View style={styles.container}>
				<AwesomeStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
				<View style={styles.inputContainer}>
					<DestinationForm addPlace={this.handleAddPlace} />
				</View>
				<DestinationList places={places} />
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
