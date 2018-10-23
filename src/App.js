import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './Common/CombineReducers';
import Router from './Common/Router';

class App extends Component{

    componentWillMount()
    {
        const config = {
            apiKey: 'AIzaSyA2GPGgOWwvO7BboHk5fPOU0RTHJuh0LFs',
            authDomain: 'demofirebaseenvironment.firebaseapp.com',
            databaseURL: 'https://demofirebaseenvironment.firebaseio.com',
            projectId: 'demofirebaseenvironment',
            storageBucket: 'demofirebaseenvironment.appspot.com',
            messagingSenderId: '695218110561'
        };

        firebase.initializeApp(config);
    }

    render(){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    };
}

export default App;
