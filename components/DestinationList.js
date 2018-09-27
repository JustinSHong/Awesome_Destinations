import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";

// renders a list of destinations
const DestinationList = ({ places, deletePlace, selectPlace }) => {
	return (
		<FlatList
			style={styles.listContainer}
			data={places}
			renderItem={({ item }) => (
				<ListItem place={item} onItemPressed={() => selectPlace(item.key)} />
			)}
		/>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		width: "100%",
		padding: 10
	}
});

export default DestinationList;
