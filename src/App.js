import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import {Home} from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';//to link pages
import UserFormLayout from './Component/UserFormLayout';


function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/form" element={<UserFormLayout/>}/>
      </Routes> 
     {/*<Home/>*/}
    </div>
    </Router>
  );
}

export default App;
