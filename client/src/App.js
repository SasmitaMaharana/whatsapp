
import { GoogleOAuthProvider } from '@react-oauth/google';


//components
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';
function App() {
  const clientId = '271759295497-f618k74h4gdc06thm47ge37alhbanoat.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId} >
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
