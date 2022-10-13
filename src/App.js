import './App.css';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import app from './Firebase/firebase.init';

const auth = getAuth(app)

function App() {

  const provider = new GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    console.log("clicked")
  }

  return (
    <div className="App">
      <button onClick={handleGoogleSingIn}>Google sign in</button>
    </div>
  );
}

export default App;
