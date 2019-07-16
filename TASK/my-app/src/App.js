import React, { Component }  from 'react';
import Contacts from './contactsList'
import { Container, Row } from 'react-bootstrap';
import './index.css'
class App extends Component {

  render(){
    
    return (
      
      <div >
        
        <Container className="list-group-item mt-1 mb-1" style={{ backgroundColor:'#2A52BE'}}>
          <Row className="box">
            <h1 style={{color:'white'}}>
              My Contacts
            </h1>
          </Row>
          <Row className="box">
            < Contacts />
          </Row>
        </Container>
      </div>
    );

  }
}

export default App;
