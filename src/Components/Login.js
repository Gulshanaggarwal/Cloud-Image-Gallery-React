import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../provider/provider";
import firebase from "firebase/app";
import { auth } from "../firebase/config";
import { Redirect } from "react-router-dom";

function Login() {
  let [user] = useContext(UserContext);
  const [redirect, setredirect] = useState(null);
  useEffect(() => {
    if (user) {
      setredirect("/dashboard");
    }
  }, [user]);
  if (redirect) {
    return <Redirect to={redirect}/>
  }

  function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        alert("logged in succesfully!!")
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
       alert("OOPs!! error try again")
        // ...
      });
  }
  return (
    <div className="login-buttons">
      <button className="login-provider-button" onClick={signInWithGoogle}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span> Continue with Google</span>
      </button>
    </div>
  );
}
export default Login;
