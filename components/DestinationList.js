import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

// renders a list of destinations
const DestinationList = ({ places }) => {
	return (
		<View>
			{places.map((places, index) => <ListItem key={index} place={place} />)}
		</View>
	);
};

export default DestinationList;
