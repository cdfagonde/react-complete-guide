import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = props => {
	const estilo = {
		'@media (min-width: 500px)' : {
			width: '450px'
		}
	};

	return (
		<div className="Person" style={estilo} >
			<p onClick={props.click}>Soy {props.name} y tengo  {props.age} años.</p>
			<p>{ props.children }</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	)
}

export default Radium(person);