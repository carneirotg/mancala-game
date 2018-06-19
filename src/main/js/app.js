const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {employees: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/game/pits'}).done(
				response => {
					this.setState({board: response.entity._embedded.board});
		});
	}

	render() {
		return (
			<GameBoard board={this.state.board}/>
		)
	}
}