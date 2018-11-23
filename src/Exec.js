import React, { Component } from 'react';

class Exec extends Component {
	render() {
		var bt = 123;
		var arr = [20,10,60]
		return (
			<div className='app'>
				<h1>{bt}</h1>
				<div id="o">{bt+10}</div>
				<div>{arr+''}</div>
			</div>
		);
	}
}
export default Exec;