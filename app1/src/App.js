import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import MobileApp from './Components/Mobile-app-design';
function App() {
  return (
    <div>
      <MobileApp data={data} />

    </div>
  );
}

export default App;
