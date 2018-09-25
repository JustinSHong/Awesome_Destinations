import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

const SelectedPlace = ({ onItemDeleted, onModalClosed, selectedPlace }) => {
	let modalContent = null; // if user did not select anything don't show modal

	if (selecedPlace) {
		// render a place's image and name
		modalContent = (
			<View>
				<Image source={selectedPlace.image} />
				<Text>{selectedPlace.value}</Text>
			</View>
		);
	}

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={selectedPlace !== null}
			onRequestClose={onModalClosed}
		>
			<View>
				{/* Render modal content here */}
				<View>
					<Button title="Delete" color="red" onPress={onItemDeleted} />
					<Button title="Close" onPress={onModalClosed} />
				</View>
			</View>
		</Modal>
	);
};

export default SelectedPlace;
