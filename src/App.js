import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 111, name: 'Max', age: 28 },
      { id: 222, name: 'Manu', age: 29 },
      { id: 333, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
    // console.log(this.state);
  };

  nameChangedHandler = (event,id) => {
    // Identificamos index do id recebido
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    // Criamos uma copia dessa pessoa
    const prs = { ...this.state.persons[personIndex] };
    // Esta seria uma outra forma de obter essa copia
    // const prs = Object.Assign( {}, this.state.persons[personIndex] );

    // Alteramos o nome
    prs.name = event.target.value;

    // Criamos uma copia da lista de pessoas
    const prss = [ ...this.state.persons ];
    // Alteramos a novssa pessoa dentro da lista
    prss[personIndex] = prs;

    // Definimos novo valor da lista
    this.setState({ persons: prss });
  }

  deletePersonHandler = ( personIndex ) => {
    // const prss = this.state.persons.slice();
    const prss = [...this.state.persons];
    prss.splice(personIndex,1);
    this.setState({ persons: prss })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    const buttonStyle = {
      /* backgroundColor: 'white', */
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      width: '200px',
      ':hover' : {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    // Aqui montamos o display condicional..
    let persons = null;
    if(this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map( (prs,ind) => {
              return <Person
                          name={prs.name}
                          age={prs.age}
                          click={ () => this.deletePersonHandler(ind) }
                          key={prs.id}
                          changed={ event => this.nameChangedHandler(event,prs.id) }
                          />
            })}
          </div>
        );
        // Fundo vermelho quando 'hide'
        buttonStyle.backgroundColor = 'red';
        buttonStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');   // [ 'red' ]
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');   // [  'red','bold' ]
    }


    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}> This is really working! </p>
        <button
          style={buttonStyle} 
          onClick={ this.togglePersonsHandler }> { this.state.showPersons ? "Hide" : "Show" } Persons </button>
        { persons }
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default App;
export default Radium(App);