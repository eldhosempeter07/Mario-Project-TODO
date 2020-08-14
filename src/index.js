import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware,compose} from 'redux'
import { Provider,useSelector } from 'react-redux';
import rootReducer from './store/reducers/RootReducer';
import thunk from 'redux-thunk';
import {getFirebase, ReactReduxFirebaseProvider,isLoaded} from 'react-redux-firebase'
import {getFirestore, reduxFirestore,createFirestoreInstance} from 'redux-firestore'
import firebase from './config/fbConfig'


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebase),
        //reactReduxFirebase(firebase)
    )
    );
    const rrfConfig = {
        userProfile: 'users',
        useFirestoreForProfile: true,
        //enableRedirectHandling: false,
        //resetBeforeLogin: false
      }
    const rrfProps = {
        firebase,
        config: rrfConfig,
        dispatch: store.dispatch,
        createFirestoreInstance
    
    
    }

    function AuthIsLoaded({ children }) {
        const auth = useSelector(state => state.firebase.auth)
        if (!isLoaded(auth)) return <div>Loading Screen...</div>;
            return children
      }
      
      
ReactDOM.render(
<Provider store={store}>
<ReactReduxFirebaseProvider {...rrfProps}>
<AuthIsLoaded>
<App /> 
</AuthIsLoaded>
</ReactReduxFirebaseProvider>
</Provider>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
