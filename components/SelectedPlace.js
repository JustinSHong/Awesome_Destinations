import React from "react";
import { Modal, View, Text, Button, StyleSheet, Image } from "react-native";

const SelectedPlace = ({ onItemDeleted, onModalClosed, selectedPlace }) => {
	let modalContent = null; // if user did not select anything don't show modal

	if (selectedPlace) {
		// render a place's image and name
		modalContent = (
			<View>
				<Image style={styles.placeImage} source={selectedPlace.image} />
				<Text>{selectedPlace.value}</Text>
			</View>
		);
	}

	return (
		<Modal
			animationType="slide"
			transparent={false}
			visible={selectedPlace !== null}
			onRequestClose={onModalClosed}
		>
			<View>
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
	placeImage: {
		height: 100,
		width: 100
	}
});

export default SelectedPlace;
