// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

const Link = (props) => (
   
        <Card title={props.title} actions={["Teste", " TEste2"]} > 
          <div>
            <p><b><h5></h5></b></p>
            <p><h6>{props.url}</h6></p>
            <p><h6>0 Comentários</h6></p>
            <p><h6>33 Minutes ago by teste@teste.com</h6></p>

          </div>
        </Card>
    
);
export default Link;