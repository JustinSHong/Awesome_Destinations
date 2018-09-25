import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";

// renders a list of destinations
const DestinationList = ({ places, deletePlace }) => {
	return (
		<View style={styles.listContainer}>
			{places.map((place, index) => (
				<ListItem
					key={index}
					place={place}
					onItemPressed={() => deletePlace(index)}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		width: "100%",
		padding: 10
	}
});

export default DestinationList;
