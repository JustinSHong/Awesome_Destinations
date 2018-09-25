import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import ListItem from "./ListItem";

// renders a list of destinations
const DestinationList = ({ places }) => {
	return (
		<View>
			{places.map((place, index) => <ListItem key={index} place={place} />)}
		</View>
	);
};

export default DestinationList;
