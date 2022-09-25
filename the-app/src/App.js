import './App.scss';
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { BookCard } from "./components/card";

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container'>
        Main block
        <BookCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
