import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// reducers
import placesReducer from "./reducers/places";
// components
import Main from "./components/Main";

// combine reducers into one root reducer
const rootReducer = combineReducers({
	places: placesReducer
});

// create store
const store = createStore(rootReducer);

const App = () => {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
};

export default App;
