import React, { Component }  from 'react';
import { Button,Container,FormControl,InputGroup   } from 'react-bootstrap';

import searchLogo from '../search-icon.jpg'
class Search extends Component {

  render(){
    
    return (
      
      <div>
        <Container>
          <InputGroup className="mb-3">
            <FormControl placeholder="Search For A Contact"/>
            <InputGroup.Append>
              <Button variant="outline-info">
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>

        
          
        </Container>
      </div>  
    );

  }
}

export default Search;
