// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
import Link from '../linkentry/linkentry'

const Links = (props) => (
    <Row>

    <Col m={8} s={12}>
   
   
    {props.items.map(post =>
        <Link title={post['title']} url={post['url']}/>
    )}
      
    </Col>
    <Col m={4} s={12}> 
    <Card>
            <Row>
                <Col m={12} s={12}> 
                    <a class="waves-effect waves-light btn">Create Post</a>

                </Col>
            </Row>
            
            
    </Card>
    </Col>
  </Row>
);
export default Links;
