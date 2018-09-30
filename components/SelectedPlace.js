import React from "react";
import { Modal, View, Text, Button, StyleSheet, Image } from "react-native";
import {Ionicons} from '@expo/vector-icons';

const SelectedPlace = ({ onItemDeleted, onModalClosed, selectedPlace }) => {
	let modalContent = null; // if user did not select anything don't show modal

	if (selectedPlace) {
		// render a place's image and name
		modalContent = (
			<View>
				<Image style={styles.placeImage} source={selectedPlace.image} />
				<Text style={styles.placeName}>{selectedPlace.name}</Text>
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
					<View style={styles.deleteContainer}>
						<Ionicons name='ios-close' size={30} />
						<Button title="Delete" color="red" onPress={onItemDeleted} />
					</View>
					<View style={styles.closeContainer}>
						<Ionicons name='ios-trash' size={30} />
						<Button title="Close" onPress={onModalClosed} />
					</View>
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
	},
	deleteContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	closeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default SelectedPlace;
