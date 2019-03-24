// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import messagesReducer from './reducers/messages_reducer';
import channelReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUserReducer from './reducers/current_user_reducer';

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise));

const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  currentUser: 'Luke',
  // currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
