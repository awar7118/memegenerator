import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Meme from './components/Meme';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Form/>
      <Meme/>
    </div>
  );
}

export default App;
