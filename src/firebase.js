// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVSU40nX6D_3cTj7HSzhRRlnKxuGi46Rk",
  authDomain: "beatshop-cc9bd.firebaseapp.com",
  projectId: "beatshop-cc9bd",
  storageBucket: "beatshop-cc9bd.appspot.com",
  messagingSenderId: "870759783984",
  appId: "1:870759783984:web:2e16638b635ffbbbad17f5",
  measurementId: "G-N00LB49T2B"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth =firebase.auth();
export{db, auth};