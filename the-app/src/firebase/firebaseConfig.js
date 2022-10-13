import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSENGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

export const bookApiKey = "AIzaSyCAYJ7mjkMe1kdmZQbgayiO5QcfDUgAQEQ";

const firebaseApp = initializeApp(firebaseConfig);


export const auth = getAuth(firebaseApp);

//обработка  подписки
export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};
//обработка авторизации
export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
  console.log("in");
};
//обработка разлогинивания
export const logOut = async () => {
  await signOut(auth);
  console.log("out");
};