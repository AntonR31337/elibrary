import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import LogIn from './components/logIn/LogIn';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
