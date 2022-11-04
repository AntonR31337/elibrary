const firebase = require("firebase/app");
const { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
 } = require("firebase/auth");

 const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSENGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
});

auth = getAuth(firebaseApp);
console.log('auth', auth);

console.log('auth.currentUser', auth.currentUser);

//обработка  подписки
exports.addUser = async (email, password) =>{
  // console.log('auth2', auth);
  await createUserWithEmailAndPassword(auth, email, password)
  // console.log('auth.currentUser2', auth.currentUser);
};

//обработка авторизации
exports.authenticate = async (email, password) =>{
  // console.log('auth1', auth);
  await signInWithEmailAndPassword(auth, email, password)
// console.log('auth.currentUser1', auth.currentUser);
};

//обработка разлогинивания
exports.logout = async () => {
  // console.log('auth3', auth);
    await signOut(auth);
    console.log("out");
}

exports.reauthenticate = async (password) => {
    
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

  