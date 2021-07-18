import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyCc22OzGg-bSLVk74PW_wTtSYcqWOogcBM',
  authDomain: 'nextfire-ccb0d.firebaseapp.com',
  projectId: 'nextfire-ccb0d',
  storageBucket: 'nextfire-ccb0d.appspot.com',
  messagingSenderId: '445519489688',
  appId: '1:445519489688:web:62c4be584a86b585223eed',
  measurementId: 'G-MPWDNWL2JR',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
