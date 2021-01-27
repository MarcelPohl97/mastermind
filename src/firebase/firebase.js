import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyDSBA0May1PhLwArTg7d2kHFqkp5NXoGK8",
    authDomain: "mastermind-e7307.firebaseapp.com",
    projectId: "mastermind-e7307",
    storageBucket: "mastermind-e7307.appspot.com",
    messagingSenderId: "74291335686",
    appId: "1:74291335686:web:5d8640d696b2b3dabc6987",
    measurementId: "G-2GV5LKDE5Q"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
