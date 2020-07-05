import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyC1UIVQvMbB2Si5gu62R5nU3XMJW1xmZU8",
  authDomain: "inshorts-9e4de.firebaseapp.com",
  databaseURL: "https://inshorts-9e4de.firebaseio.com",
  projectId: "inshorts-9e4de",
  storageBucket: "inshorts-9e4de.appspot.com",
  messagingSenderId: "306442142565",
  appId: "1:306442142565:web:bd82f39fc4c1511246978c",
  measurementId: "G-JFGPVC196D"
};
  const fire = firebase.initializeApp(config);

  export default fire;