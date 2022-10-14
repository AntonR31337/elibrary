import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { auth } from "./firebase"

    
  //обработка  подписки
  export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
  };
  //обработка авторизации
  export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
  };
  //обработка разлогинивания
  export const logOut = async () => {
    await signOut(auth);
    console.log("out");
  };