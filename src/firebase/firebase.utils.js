import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBqqdQbcMOeWet782uBfPoY4xZ_rxyA1CU",
    authDomain: "ecomm-db-99ba4.firebaseapp.com",
    projectId: "ecomm-db-99ba4",
    storageBucket: "ecomm-db-99ba4.appspot.com",
    messagingSenderId: "88269385791",
    appId: "1:88269385791:web:87ab5d05634e8c212ac88a"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
      }
    }
  
  return userRef;
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;