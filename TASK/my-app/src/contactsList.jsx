import React, { Component }  from 'react';
import { Container, Row, Col,Image } from 'react-bootstrap';
import Search from './components/Search'

const dataAPI='http://demo9212539.mockable.io/contacts'
class Contacts extends Component {
    constructor(props){
        super(props);
        this.state={
            contacts:[]
        }
    }
    componentDidMount(){
        fetch(dataAPI)
        .then(data=> data.json())
        .then(data=>{
            let list=data.map(user=>{
                return(
                    <div className="list-group-item" key={user.email}>
                        <Container>

                                <Row>

                                    <Col>
                                    <Image  src={user.photo} roundedCircle />
                                    </Col>
                                    <Col>
                                        <Row className="list-group-item"><h6>Name: {user.name}</h6></Row>
                                        <Row className="list-group-item"><h6>Gender: {user.gender}</h6></Row>
                                        <Row className="list-group-item"><h6>E-Mail: {user.email}</h6></Row>
                                        <Row className="list-group-item"><h6>Phone No.: {user.phone}</h6></Row>
                                    </Col>
                                </Row>
                           
                        </Container>
                        <br/>
                    </div>
                )
            })
            this.setState({
                contacts:list
            })

        })
    }
    
    render(){
        return (
        <div className="App" >    
            <Search></Search>     
            <br/>

            <div className='scroll list-group-item'>
                {console.log(this.state.contacts)}

                  {this.state.contacts}
            </div>
        </div>
        );

    }
}

export default Contacts;
