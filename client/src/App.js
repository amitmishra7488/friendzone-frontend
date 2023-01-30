import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import ParticlesBg from 'particles-bg'
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Navbar/Sidebar';
import Post from './components/Post/Post';
import Home from './components/Homepage/Home';




function App() {


  return (
    <div className="App">
      <Navbar/>
      <Home/>
      
      
    </div>
  );
}

export default App;
