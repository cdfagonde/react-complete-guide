import React from 'react';
import Person from '../Person/Person';

const persons = (props) => 
	props.persons.map( (prs,ind) => {
        return <Person
                   name={prs.name}
                   age={prs.age}
                   key={prs.id}
                   click={ () => props.clicked(ind) }
                   changed={ event => props.changed(event,prs.id) }
                   />
    });

export default persons;