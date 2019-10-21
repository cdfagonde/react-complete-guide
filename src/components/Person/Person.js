import React from 'react';
import myClasses from './Person.css';

const person = props => {
	// // Vamos gerar um erro propositalmente, só para testar..
	// const ran = Math.random();
	// if(ran >= 0.75) {
	// 	throw new Error("Something went wrong");
	// }
	
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