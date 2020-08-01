import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider,useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { isLoaded  } from 'react-redux-firebase';
import {reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore'
import { getFirebase, ReactReduxFirebaseProvider, reactReduxFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    // reactReduxFirebase(fbConfig), // redux binding for firebase
    reduxFirestore(firebase,fbConfig) // redux bindings for firestore
  )
);

const rrfConfig = {
  userProfile: 'users',
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: 'users', // where profiles are stored in database
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions'
}
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}

ReactDOM.render(<Provider store={store}> 
                  <ReactReduxFirebaseProvider {...rrfProps}> 
                    <AuthIsLoaded>
                      <App /> 
                    </AuthIsLoaded>
                  </ReactReduxFirebaseProvider>
                </Provider>, 
              document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
