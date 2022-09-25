import './App.scss';
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { BookList } from "./components/booklist";

function App() {

  return (
    <div className="App">
      <Header />
      <main className='container main_wrapper'>
        <BookList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
