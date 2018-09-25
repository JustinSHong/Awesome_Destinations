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
			<Image
				style={styles.image}
				source={{
					uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
				}}
			/>
			<Text>{place}</Text>
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
