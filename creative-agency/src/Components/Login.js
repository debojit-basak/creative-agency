import React, { useContext } from 'react';
import logo from "../images/logo.png";
import ggl from "../images/google.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const gglSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            console.log(result.user);
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { user: displayName, email: email, photoURL: photoURL };
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            console.log(error.message);
        });
    };
    return (
        <div>
            <img className="Loginlogo" src={logo} alt="" />
            <div className="glogin">
                <button onClick={gglSignIn} className="btn btn-warning">
                    <img src={ggl} alt="" /> Login With Google Account.
                </button>
            </div>
        </div>
    );
};

export default Login;