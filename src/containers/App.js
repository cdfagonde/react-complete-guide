import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import withClass from '../hoc/withClass';
import Auxi from '../hoc/Auxi';
import AuthContext from '../context/auth-context.js'

class App extends Component {

  constructor(props) {
    super(props);
    //
    console.log('[Ap.js] constructor');
    /*
    // Quando temos constructor, podemos definir state aqui..
    this.state = {
     persons: [
       { id: 111, name: 'Max', age: 28 },
       { id: 222, name: 'Manu', age: 29 },
       { id: 333, name: 'Stephanie', age: 26 }
      ],
     otherState: 'some other value',
      showPersons: false
    }; */
  }

  state = {
    persons: [
      { id: 111, name: 'Max', age: 28 },
      { id: 222, name: 'Manu', age: 29 },
      { id: 333, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props,state) {
    // Este método deve retornar meu state alterado. Neste caso, não mudou nada.
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount não rodará mais a partir de React 17. 
  /* UNSAFE_componentWillMount() {
    console.log('[App.js] componentWillMount (UNSAFE) ');
  } */

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.log('[App.js] shouldComponentUpdate',nextProps,nextState);
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }



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

    // Definimos novo valor da lista.
    /*
    this.setState({ 
        persons: prss,
        changeCounter: this.state.changeCounter + 1
    }); */
    // Este formato de setState é o recomendado para o caso em que a atualização do status depende do status anterior
    this.setState((prevState,props) => {
      return {
        persons: prss,
        changeCounter: prevState.changeCounter + 1
      }
    });
  };

  deletePersonHandler = ( personIndex ) => {
    // const prss = this.state.persons.slice();
    const prss = [...this.state.persons];
    prss.splice(personIndex,1);
    this.setState({ persons: prss })
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('[App.js] render');
    
    // Aqui montamos o display condicional..
    let persons = null;

    if(this.state.showPersons) {
      persons = (
            <Persons
                persons={ this.state.persons }
                clicked={ this.deletePersonHandler }
                changed={ this.nameChangedHandler }
                isAuthenticated={ this.state.authenticated } />
      );
    }


      // <div className={ classes.App } >
    return (
      <Auxi>
        <button onClick={ () => { this.setState( { showCockpit: false }); }} > Remove Cockpit </button>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
          { this.state.showCockpit
            ? ( <Cockpit
                   title={this.props.appTitle}
                   showPersons={ this.state.showPersons }
                   personsLenght={ this.state.persons.length }
                   clicked={ this.togglePersonsHandler } /> )
           : null }
          { persons }
        </AuthContext.Provider>
      </Auxi>
    );
    // </div>

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default App;
export default withClass(App,classes.App);