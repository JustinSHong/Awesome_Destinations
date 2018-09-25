import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

// renders place image and text
const ListItem = ({ place }) => {
	return (
		<View>
			<Text>{place}</Text>
		</View>
	);
};

export default ListItem;
