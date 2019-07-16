import React, { Component }  from 'react';
import { Button,Container,FormControl,InputGroup   } from 'react-bootstrap';

class Search extends Component {

  render(){
    
    return (
      
      <div>
        <Container>
          <InputGroup className="mb-3" style={{width:'100%'}} >
            <FormControl onChange={this.props.handleSearchTxt} placeholder="Search For A Contact"/>
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
