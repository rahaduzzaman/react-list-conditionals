import React, { Component } from 'react';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char';


import './App.css';

class App extends Component {

  state = {
    userInputValue: ''
  }

  inputChangeHandler = (event) => {
    let inputString = event.target.value;

    this.setState({
      userInputValue: inputString
    });
  }

  deleteLetterHandler = (letterIndex) => {
    // const persons = this.state.persons.slice;
    const stringArr = this.state.userInputValue.split('');
    stringArr.splice(letterIndex, 1);
    const newStr = stringArr.join('');
    this.setState({userInputValue: newStr});
  } 

  render() {

    const letterList = this.state.userInputValue.split('').map((letter, index)=>{
      return <Char key={index} 
      click={()=>this.deleteLetterHandler(index) } 
      charecter={letter} /> 
    });

    return (
      <div className="App container">
        <input type="text"
        onChange={this.inputChangeHandler} 
        value = {this.state.userInputValue} />
        <p>String Length: {this.state.userInputValue.length}</p>

        <Validation
         strLength = {this.state.userInputValue.length} />

         {letterList}
      </div>
    );
  }
}

export default App;
