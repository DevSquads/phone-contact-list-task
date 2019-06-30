
import React, { Component }  from 'react';
import Contacts from './Contacts';

class App extends Component {

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 offset-sm-2 ">
            <h2 className="title">My Contact List</h2>
            <Contacts/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;