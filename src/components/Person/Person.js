import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../hoc/withClass';
import myClasses from './Person.css';
import Auxi from '../../hoc/Auxi';
import AuthContext from '../../context/auth-context';

// Versão functional component
/*
const person = props => {
	// // Vamos gerar um erro propositalmente, só para testar..
	// const ran = Math.random();
	// if(ran >= 0.75) {
	// 	throw new Error("Something went wrong");
	// }
	console.log('[Person.js] rendering..');
	
	//
	return (
		<div className={ myClasses.Person } >
			<p onClick={props.click}>Soy {props.name} y tengo  {props.age} años.</p>
			<p>{ props.children }</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	)
}

export default person;
*/


// Versão class component
class Person extends Component {

	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	// Esta chamada vale só para class based components
	static contextType = AuthContext;

	componentDidMount() {
		// this.inputElement.focus();
		this.inputElementRef.current.focus();
		// console.log("Focus --> ", this.inputElementRef.current);

		console.log( "Autenticado.. ", this.context.authenticated );
		console.log( "Objeto inteiro.. ", this.context );
	}

	render() {
		console.log('[Person.js] rendering..');
		
		/*
		return (
			<div className={ myClasses.Person } >
				<p onClick={ this.props.click }>Soy { this.props.name } y tengo  { this.props.age } años.</p>
				<p>{ this.props.children }</p>
				<input type="text" onChange={ this.props.changed } value={ this.props.name } />
			</div>
		);
		*/

		/*
				<AuthContext.Consumer>
					{(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p> }
				</AuthContext.Consumer>
		*/

		return (
			<Auxi >

				{ /* esta variavel context eh gerada pelo React usando nossa variavel contextType */
					this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p> }

				<p onClick={ this.props.click }>Soy { this.props.name } y tengo  { this.props.age } años.</p>
				<p>{ this.props.children }</p>
				<input	type="text"
						// ref={(inputElem) => { this.inputElement = inputElem }}
						ref={ this.inputElementRef }
						onChange={ this.props.changed } value={ this.props.name } />
			</Auxi>
		);

	}
}


Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default withClass(Person,myClasses.Person);