import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);

	console.log("Usando authContext -> ", authContext.authenticated);

	useEffect( () => {
		console.log('[Cockpit.js] useEffect');
		//
		/*
		setTimeout( () => {
			alert('useEffect saved data to the cloud');
		},1000 ); */
		toggleBtnRef.current.click();

		// Usamos o return desta funções para ações de limpeza. Isto eh uma substituição do componentWillUnmount
		return ( () => {
			console.log('[Cockpit.js] cleanup work in useEffect');
		});
	}, []);

	useEffect( () => {
		console.log('[Cockpit.js] 2nd useEffect');
		//
		return ( () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect');
		});
	});

	const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
      btnClass = classes.Red;
    }
    if(props.personsLength <= 2) {
      assignedClasses.push( classes.red );   // [ 'red' ]
    }
    if(props.personsLength <= 1) {
      assignedClasses.push( classes.bold );   // [  'red','bold' ]
    }

    /*
        	<AuthContext.Consumer>
        		{(context) => !context.authenticated ? <button onClick={ context.login } > Log in </button> : null }
        	</AuthContext.Consumer>
    */

	return (
		<div className={ classes.Cockpit } >
			<h1>{props.title}</h1>
        	<p className={assignedClasses.join(' ')}> This is really working! </p>
        	<button
        		ref={toggleBtnRef}
        		className={ btnClass }
        		onClick={ props.clicked } > { props.showPersons ? "Hide" : "Show" } Persons </button>

        		{ !authContext.authenticated ? <button onClick={ authContext.login } > Log in </button> : null }
		</div>
	);
}

export default React.memo(cockpit);