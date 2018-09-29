import React, { Component } from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
	StyleSheet
} from "react-native";

// renders place image and text
const ListItem = ({ place, onItemPressed }) => {
	return (
		<TouchableOpacity style={styles.placeContainer} onPress={onItemPressed}>
			<Image style={styles.image} source={place.image} />
			<Text>{place.name}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	placeContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10
	},
	image: {
		height: 30,
		width: 30,
		marginRight: 30
	}
});

export default ListItem;
