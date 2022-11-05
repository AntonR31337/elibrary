import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
  getIdToken,
  onAuthStateChanged
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

  export const reauthenticate = async (password) => {
    
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      password
    )
    const result = await reauthenticateWithCredential(
        auth.currentUser,
        credential
    )
    return result
  }


// export const CheckAuth = async () => {
//   const { request } = useHttp()
//   onAuthStateChanged(auth, async (user) => {
//     if (user) {
//       const token = await getIdToken(user);
//       console.log('token', token);
//       await request('http://localhost:5000/api/profilepage', 'POST', {
//         'AuthToken': token
//       })
//     }
//   });
// }

  