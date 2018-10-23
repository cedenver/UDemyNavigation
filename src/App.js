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
            apiKey: 'my_api_key',
            authDomain: 'my_domain.firebaseapp.com',
            databaseURL: 'https://my_domain.firebaseio.com',
            projectId: 'my_domain',
            storageBucket: 'my_domain.appspot.com',
            messagingSenderId: 'sender_id'
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
