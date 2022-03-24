import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom'
// import { Home } from './BasicTemp/pages/home';
// import  {NavBar} from './BasicTemp/components/Navbar';
// import { CategoryCard } from './components/molecules/card';
// import Image from 'react-bootstrap/Image'
// import { UserContainer } from './containers/user';
import { SignIn } from './components/molecules/loginForm';

function App() {
  return (
    <SignIn />
  );
}

export default App;
