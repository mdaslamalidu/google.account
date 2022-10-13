import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import app from './Firebase/firebase.init'
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
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

  return (
    <div className="App">
      { user.email ? 
        <button onClick={handleSignOut}>Sign Out</button>
        :
        <button onClick={handleGoogleSingIn}>Google sign in</button>
      }
      { user.email && <div>
        <h3>User Name: {user.displayName}</h3>
        <p>User Email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
}

export default App;
