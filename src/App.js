import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Adicionar from './components/Adicionar'
import ListLog from './components/ListLog'
import TelaPrincipal from './components/TelaPrincipal'
import Login from './components/Login'
import ProjectID from './components/ProjectID'
export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/"><TelaPrincipal/></Route>
        <Route path="/Adicionar"><Adicionar/></Route>
        <Route path="/Lista"><ListLog/></Route>
        <Route path="/Login"><Login/></Route>
        <Route path="/ProjectID/:id"><ProjectID/></Route>
      </Switch>
    </Router>
  )
}
