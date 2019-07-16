import React, { Component }  from 'react';
import Contacts from './contactsList'
import { Container, Row } from 'react-bootstrap';
import './index.css'
class App extends Component {

  render(){
    
    return (
      
      <div >
        
        <Container className="list-group-item">
          <Row>
            <h1>
              My Contacts
            </h1>
          </Row>
          <Row>
            < Contacts/>
          </Row>
        </Container>
      </div>
    );

  }
}

export default App;
