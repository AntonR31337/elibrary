import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import LogIn from './components/logIn/LogIn';
import { useEffect, useState } from 'react';
import { auth } from './firebase/firebaseConfig';
import { onAuthStateChanged } from "@firebase/auth";
import { PublicRoute } from './components/publicRoute/PublicRoute';
import PageNotFound from './components/404/PageNotFound';
import { BooksList } from './components/booksList/BooksList';
<<<<<<< HEAD
<<<<<<< HEAD
import ProfilePage from './components/profilePage/ProfilePage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

=======
import { BookPage } from './components/BookPage/BookPage';
>>>>>>> ccd66128c7074e085147dfd37ba2416521030754
=======
import { BookPage } from './components/BookPage/BookPage';
>>>>>>> ccd66128c7074e085147dfd37ba2416521030754

function App() {

  //локально сохраняем статус авторизации
  const [authed, setAuthed] = useState(false);
  //обработчики изменения состояния авторизации в firebase
  const handleLogin = () => {
    setAuthed(true);
  };
  const handleLogout = () => {
    setAuthed(false);
  };
  //подписываемся на изменение данных о пользователях в firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        handleLogin();
      } else {
        handleLogout();
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<MainPage authed={authed} />} />

        <Route path="/login" element={<PublicRoute authed={authed} />}>
          <Route path="" element={<LogIn />} />
        </Route>

        <Route path="/signup" element={<PublicRoute authed={authed} />}>
          <Route path="" element={<LogIn authed />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
        <Route path="/bookslist" element={<BooksList authed={authed} />} />

        <Route path="/profilepage" element={<PrivateRoute authed={authed} />} >
          <Route path="" element={<ProfilePage />} />
        </Route>

      </Routes>
=======
=======
>>>>>>> ccd66128c7074e085147dfd37ba2416521030754
      <Header authed={authed} />
        <Routes>
          <Route path="/" element={<MainPage authed={authed} />} />
          <Route path="/login" element={<PublicRoute authed={authed} />}>
            <Route path="" element={<LogIn />} />
          </Route>
          <Route path="/signup" element={<PublicRoute authed={authed} />}>
            <Route path="" element={<LogIn authed />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/bookslist" element={<BooksList authed={authed} />} />
          <Route path='/book/:id' element={<BookPage />} />
        </Routes>
      <Footer />
<<<<<<< HEAD
>>>>>>> ccd66128c7074e085147dfd37ba2416521030754
=======
>>>>>>> ccd66128c7074e085147dfd37ba2416521030754
    </div>
  );
}

export default App;
