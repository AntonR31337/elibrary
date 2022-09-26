import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBO72Wf0U8cj8-M6sIRA7pgIPmNrOrdZNE",
    authDomain: "gb-lib-87b6c.firebaseapp.com",
    projectId: "gb-lib-87b6c",
    storageBucket: "gb-lib-87b6c.appspot.com",
    messagingSenderId: "863199453347",
    appId: "1:863199453347:web:5c1110efb92b28e091df16"
  };

  const firebaseApp = initializeApp(firebaseConfig);


  export const auth = getAuth(firebaseApp);