// const firebase = require("firebase/app");
// const { 
//   getAuth, 
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//  } = require("firebase/auth");

//  const firebaseApp = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_APIKEY,
//     authDomain: process.env.REACT_APP_AUTHDOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSENGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// });

// auth = getAuth(firebaseApp);
// console.log('auth', auth);

// console.log('auth.currentUser', auth.currentUser);

// exports.addUser = async (email, password) =>{
//   await createUserWithEmailAndPassword(auth, email, password)
// };

// exports.authenticate = async (email, password) =>{
//   await signInWithEmailAndPassword(auth, email, password)
// };

// exports.logout = async () => {
//     await signOut(auth);
//     console.log("out");
// }

// exports.reauthenticate = async (password) => {
    
//     const credential = EmailAuthProvider.credential(
//       auth.currentUser.email,
//       password
//     )
//     const result = await reauthenticateWithCredential(
//         auth.currentUser,
//         credential
//     )
//     return result
//   }

  