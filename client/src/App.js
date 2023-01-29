import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import ParticlesBg from 'particles-bg'
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Navbar/Sidebar';




function App() {


  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      {/* <Login/> */}
      
      {/* <Profile/> */}
      
    </div>
  );
}

export default App;
