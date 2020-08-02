import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss'

// REDUX
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { smurfReducer } from './reducers'
import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(smurfReducer, composeWithDevTools (
    applyMiddleware(thunk)
));


// COMPONENTS


ReactDOM.render(
    <React.StrictMode> 
        <Provider store = {store}>
            <App />
        </Provider>
    </React.StrictMode>, 
    document.getElementById("root")
);

