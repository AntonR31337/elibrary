import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp); 
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp)

