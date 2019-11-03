import React, { Component } from 'react';
import myClasses from './Person.css';
// import Auxi from '../../hoc/Auxi';

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
	render() {
		console.log('[Person.js] rendering..');
		
		return (
			<div className={ myClasses.Person } >
				<p onClick={ this.props.click }>Soy { this.props.name } y tengo  { this.props.age } años.</p>
				<p>{ this.props.children }</p>
				<input type="text" onChange={ this.props.changed } value={ this.props.name } />
			</div>
		);

		/*
		return (
			<Fragment >
				<p onClick={ this.props.click }>Soy { this.props.name } y tengo  { this.props.age } años.</p>
				<p>{ this.props.children }</p>
				<input type="text" onChange={ this.props.changed } value={ this.props.name } />
			</Fragment>
		);
		*/

	}
}

export default Person;