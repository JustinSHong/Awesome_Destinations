import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

// renders place image and text
const ListItem = ({ place, onItemPressed }) => {
	return (
		<TouchableOpacity onPress={onItemPressed}>
			<View>
				<Text>{place}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ListItem;
