import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBNZMN7h22Tbs2TcTgDlOkRgANNmjjPPzU",
  authDomain: "seniorproject-1ed7d.firebaseapp.com",
  projectId: "seniorproject-1ed7d",
  storageBucket: "seniorproject-1ed7d.appspot.com",
  messagingSenderId: "719951366734",
  appId: "1:719951366734:web:0a013fc5c910cb326b511f",
  measurementId: "G-PE6VPJYD7Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics };
