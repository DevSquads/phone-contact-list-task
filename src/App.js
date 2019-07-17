import React , {Component} from "react";
import "./App.css";
import ListContacts from "./compnents/ListContacts";

class App extends Component {
   contacts = [
    {
      id:1,
      image:'http://assets.wornon.tv/uploads/2012/03/s01e05-marys-brown-coat-over-teal-skirt-yellow-flatsb.jpg',
      name: 'Shrouk Moustafa', 
      company: 'Visual Designer'
    },
    {
      id:2,
      image:'http://cdn.playbuzz.com/cdn/e6516fc7-27c5-4798-8097-3553691017a2/5cab9b6e-6a4c-4bda-90fe-c8af89826b03.jpg',
      name: 'Ali Mohamed',
      company: 'Content Writer'
    },
    {
      id:3,
      image:'https://a.wattpad.com/cover/4106257-368-k161010.jpg',
      name: 'Sara Hussien', 
      company: 'Marketer'
    },
    {
      id:4,
      image:'https://s-media-cache-ak0.pinimg.com/originals/11/d3/e9/11d3e91be6df715f88d543374c039e1d.jpg',
      name: 'Esraa Hamed',
      company: 'Android Developer'
    },
    {
      id:5,
      image:'http://assets.wornon.tv/uploads/2012/03/s01e05-marys-brown-coat-over-teal-skirt-yellow-flatsb.jpg',
      name: 'Bassma Mahmoud',
      company: 'Web Developer'
    },
  ]
  
  render() {
    return (
           <div>
             <ListContacts contacts = {this.contacts}/>
           </div>
    )  
         }
}

export default App;
