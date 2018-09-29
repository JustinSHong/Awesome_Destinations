import React from "react";
import { Constants } from "expo";
import { View, StatusBar } from "react-native";

const AwesomeStatusBar = ({ backgroundColor, ...props }) => {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	);
};

export default AwesomeStatusBar;
