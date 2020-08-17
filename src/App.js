
import React, { Component } from 'react';
import "./App.css"


class App extends Component{
  state={
      reset:[],
      numbers:[]
    }
  

  generateNumbers = () =>{
      const lotery6 = [];
      for (let i=0; i < 6; i++) {
      let num = Math.floor(Math.random() * 49);
      if (lotery6.includes(num)) {
        num = Math.floor(Math.random() * 49);
      }
      lotery6.push(num);
      
   }
   console.log(lotery6);
   this.setState({numbers:lotery6});
  };

  newNumbers = () => {
    this.setState({numbers:this.state.reset})
  }
  render () {
  return (
    <div className="App">
      <div>  {this.state.numbers.map((item) => {
        return (
          <div id="items">{item}</div>
        )
      })}
      </div>
      <div>
        <button onClick={this.newNumbers}>reset</button>
        <button onClick={this.generateNumbers}>Try-out</button>
      </div>
   
    </div>
  );
}
}


export default App;