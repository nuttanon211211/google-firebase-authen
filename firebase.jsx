import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "",

  authDomain: "",

  projectId: "",

  storageBucket: "",

  messagingSenderId: "",

  appId: ""

};


if (!getApps().length) {
    initializeApp(firebaseConfig);
}

export const auth = getAuth();
