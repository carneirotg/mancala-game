const React = require('react');

import Pit from './entities/Pit';

class Game extends React.Component {
	
	constructor(props: any) {
	    super(props);
	    this.state = {
	      player1Pits: [],
	      player1MainPit: null,
	      player2Pits: [],
	      player2MainPit: null,
	    };
	  }
	
	  componentDidMount() {
	    fetch('http://localhost:8080/game/pits')
	      .then(response => response.json())
	      .then(data => {
	    	  var pits1 = new Array();
	    	  var pits2 = new Array();
	    	  
	    	  for (var i = 0; i < 6; i++) {
		  			pits1[i] = data[i+7];
		  	  }
	    	  
	    	  for (var i = 0; i < 6; i++) {
	  			pits2[i] = data[i];
	  		  }
	    	  
	    	  this.setState({player1MainPit: data[13]});
	    	  this.setState({player2MainPit: data[7]});
	    	  this.setState({player1Pits: pits1});
	  	      this.setState({player2Pits: pits2});
	    	  
	      });
	  }
	  
	  render() {
		  
		const {player1MainPit} = this.state;
		const {player1Pits} = this.state;
		const {player2MainPit} = this.state;
		const {player2Pits} = this.state;
	    
	    console.log(this.state)
	  
	    const cardStyle = {
	    	background: 'url(images/stone.png)'
	    };
	    
//	    {player1Pits.map((pit: any) =>
//        <div className="col-sm" key={pit.seq}>
//        	
//        </div>
//      )}
	    
	    const divStyle={
	    		border: '1px'
	    };
	    
	    return (
	      <div>
	      	<h2><span className="badge badge-secondary">Player 1</span></h2>
	      	<div className="container">
	      	<div className="row">
	      		<div className="col-6" style={divStyle}>.col-6</div>
		        <div className="col-1" style={divStyle}>.col-9</div>
		        <div className="col-1" style={divStyle}>.col-9</div>
		        <div className="col-1" style={divStyle}>.col-9</div>
		        <div className="col-1" style={divStyle}>.col-9</div>
		        <div className="col-1" style={divStyle}>.col-9</div>
		        <div className="col-1" style={divStyle}>.col-9</div>
	        </div>
	        </div>
	      	<h2><span className="badge badge-secondary">Player 2</span></h2>
	      </div>
	    );
	  }
}

export default Game