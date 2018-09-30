import React from "react";
import { Modal, View, Text, Button, StyleSheet, Image } from "react-native";

const SelectedPlace = ({ onItemDeleted, onModalClosed, selectedPlace }) => {
	let modalContent = null; // if user did not select anything don't show modal

	if (selectedPlace) {
		// render a place's image and name
		modalContent = (
			<View>
				<Image style={styles.placeImage} source={selectedPlace.image} />
				<Text style={styles.placeName}>{selectedPlace.value}</Text>
			</View>
		);
	}

	return (
		<Modal
			animationType="slide"
			transparent={false}
			visible={selectedPlace ? true : false}
			onRequestClose={onModalClosed}
		>
			<View style={styles.modalContent}>
				{modalContent}
				<View>
					<Button title="Delete" color="red" onPress={onItemDeleted} />
					<Button title="Close" onPress={onModalClosed} />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContent: {
		margin: 20
	},
	placeImage: {
		height: 100,
		width: "100%"
	},
	placeName: {
		fontSize: 24,
		textAlign: "center",
		fontWeight: "bold"
	}
});

export default SelectedPlace;
