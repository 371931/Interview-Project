import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Leftbar from './components/leftBar/Leftbar';
import Home from './components/homeMain/Home';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}