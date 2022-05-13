import { AuthProvider } from '../context/AuthContext'
import '../styles/globals.css';


//App.js
function MyApp({ Component, pageProps }) {
  return (
    <>
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    </>
  );
}

export default MyApp
