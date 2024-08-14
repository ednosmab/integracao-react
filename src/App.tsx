import React, { Component } from 'react';
import './App.css';
import Contador from './componentes/Contador';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

class App extends Component {
  render(){
    return (
      <div className='App'>
        <Contador valorInicial={0}/>
      </div>
    )
  }
}

export default App;
