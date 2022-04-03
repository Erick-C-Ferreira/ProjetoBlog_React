import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/estaticos/NavBar/NavBar'
import Footer from './components/estaticos/Footer/Footer'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario'
import './App.css';

function App() {
  return (
    <Router>

      <NavBar />

      <Switch>
        <div style={{minHeight: '100vh'}}>   
        <Route exact path="/">
            <Login />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/cadastro-usuario">
            <CadastroUsuario />
          </Route>
        </div>
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;