import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/estaticos/footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import './App.css';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagens from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/estaticos/navbar/NavBar';

function App() {
  return (
    <Provider store={ store }>  
      <ToastContainer />    
      <Router>
        <NavBar />
        <Switch>
          <div style={{ minHeight: '100vh' }}>
            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/cadastrousuario">
              <CadastroUsuario />
            </Route>

            <Route path="/temas">
              <ListaTema />
            </Route>

            <Route path="/posts">
              <ListaPostagens />
            </Route>

            <Route exact path='/formularioPostagem'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>
            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>
            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>
            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>

          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;