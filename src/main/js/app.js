const React = require('react');
const ReactDOM = require('react-dom');

import Game from './game';

class App extends React.Component {

	componentDidMount() {
		fetch("http://localhost:8080/game/", {
		    headers: {
		      'content-type': 'application/json'
		    },
		    method: 'POST'
		  })
	}
	
	handleStartGame() {
		ReactDOM.render(
				<Game />,
				document.getElementById('wrapper')
			)
	}

	render() {
		return (
			<div>
				<button className="btn btn-primary btn-lg" onClick={this.handleStartGame}>Start Game</button>
			</div>
		)
	}
}

ReactDOM.render(
		<App />,
		document.getElementById('wrapper')
	)