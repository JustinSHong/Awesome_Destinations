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
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	);
}

export default class App extends Component {
	state = {
		places: []
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
	handleDeletePlace = index => {
		const { places } = this.state;

		this.setState(() => ({
			places: places.filter((p, i) => {
				return i !== parseInt(index, 10);
			})
		}));
	};

	render() {
		const { placeName, places } = this.state;

		return (
			<View style={styles.container}>
				<AwesomeStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
				<DestinationForm addPlace={this.handleAddPlace} />
				<DestinationList places={places} deletePlace={this.handleDeletePlace} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
