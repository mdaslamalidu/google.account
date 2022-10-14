import './App.css';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import app from './Firebase/firebase.init'
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const googlePovider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googlePovider)
    .then(result => {
      const user = result.user;
      setUser(user)
      console.log(user)
    })
    .catch(error => {
      console.log("error", error)
    })
  }

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      setUser({})
    })
    .catch(() =>{
      setUser({})
    })
  }

  const handleGithubSingIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user;
      setUser(user)
      console.log(user)
    })
    .then(error => {
      console.error("error: ", error)
    })
  }

  return (
    <div className="App">
      {user.uid ? 
        <button onClick={handleSignOut}>Sign Out</button>
        :
       <>
          <button onClick={handleGoogleSingIn}>Google sign in</button>
          <button onClick={handleGithubSingIn}>Github sign in</button>
       </>
      }
      {user.uid && <div>
        <h3>User Name: {user.displayName}</h3>
        <p>User Email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
}

export default App;
