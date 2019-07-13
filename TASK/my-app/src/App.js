import React, { Component }  from 'react';
import Contacts from './contactsList'
import { Container, Row } from 'react-bootstrap';

class App extends Component {

  render(){
    
    return (
      
      <div >
        
        <Container >
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
