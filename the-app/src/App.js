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
import { BookPage } from './components/BookPage/BookPage';

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
    </div>
  );
}

export default App;
