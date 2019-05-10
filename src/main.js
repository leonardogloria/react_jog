// Importando o React
import React from "react";
// Importando o component Home
//import Home from "./components/home/home";
// Importando os components necessários da lib react-materialize
import { Container } from 'react-materialize';
import ListView from './components/links/links';
import Link from './components/linkentry/linkentry'
import { Switch, Route } from 'react-router-dom'
const data = [{title: "Google",url:"http://www.google.com"},{title: "Facebook", url:"http://facebook.com"}]

const Main = () => (
  <main>
    <Container>
        <Switch>
            <Route exact path='/' 
             render={(props) => <ListView {... props} items={data} />} /> 
           
        </Switch>
    </Container>
  </main>  
);

export default Main;