import React, { Component } from "react";
import { createStore, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
// reducers
import placesReducer from "./reducers/places";
// components
import Main from "./components/Main";

// combine reducers into one root reducer
const rootReducer = combineReducers({
	places: placesReducer
});

let composeEnhancers = compose;

// global var exposed in development only
if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// create store
const store = createStore(rootReducer, composeEnhancers());

const App = () => {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
};

export default App;
