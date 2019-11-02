import React, { PureComponent } from 'react';
import Person from '../Person/Person';

// Versão functional component
/*
const persons = (props) => {
	console.log('[Persons.js] rendering...');

	return props.persons.map( (prs,ind) => {
        return <Person
                   name={prs.name}
                   age={prs.age}
                   key={prs.id}
                   click={ () => props.clicked(ind) }
                   changed={ event => props.changed(event,prs.id) }
                   />
    })
};

export default persons;
*/


// Versão class component
class Persons extends PureComponent {
	/* Metodo comentado para evitar warning
	static getDerivedStateFromProps(props,state) {
		console.log('[Persons.js] getDerivedStateFromProps');
		return state;
	} */

	/* Metodo caducando em React 17
	UNSAFE_componentWillReceiveProps(props) {
		console.log('[Persons.js] componentWillReceiveProps',props);
	} */

    /* 
    A classe PureComponent já implementa o método shouldComponentUpdate, verificando todas as props.
	shouldComponentUpdate(nextProps,nextState) {
		console.log('[Persons.js] shouldComponentUpdate');

		// Nota importante:
		// Estamos fazendo uma comparação de ponteiros para saber se tivemos alguma alteração no componente persons.
		// Isto funciona neste caso somente porque no processo de alteração de persons, estamos fazendo uma copia do array e depois substituindo
		// o anterior pela copia alterada. Se fizéssemos uma alteração direta no objeto, esse IF não funcionaria, já que os ponteiros seriam os mesmos.
		if(nextProps.persons !== this.props.persons) {
			return true;
		}
		return false;
		// return true;
	} */

	getSnapshotBeforeUpdate(prevProps,prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return { message: '[Persons.js] Snapshot!' };
	}

	componentDidUpdate(prevProps,prevState,snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		console.log(snapshot);
	}

	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
	}

	render() {
		console.log('[Persons.js] rendering...');

		return this.props.persons.map( (prs,ind) => {
        	return <Person
                   		name={prs.name}
                   		age={prs.age}
                   		key={prs.id}
                   		click={ () => this.props.clicked(ind) }
                   		changed={ event => this.props.changed(event,prs.id) }
                   />
    	})
	}
}

export default Persons;