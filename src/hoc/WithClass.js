import React from 'react';

// Uma forma de montar..
/*
const withClass = props => (
	<div className={props.classes}>{props.children}</div>
)
*/

// Outra forma de montar
const withClass = (WrappedComponent,className) => {
	return props => (
		<div className={className}>
			<WrappedComponent {...props} />
		</div>);
}

export default withClass;