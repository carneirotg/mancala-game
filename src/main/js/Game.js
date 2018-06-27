const React = require('react');

import Pit from './entities/Pit';
import Stone from './entities/Stone';

class Game extends React.Component {
	
	constructor(props: any) {
	    super(props);
	    this.state = {
	      player1Pits: [],
	      player1MainPit: [],
	      player2Pits: [],
	      player2MainPit: [],
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
	    	  this.setState({player2MainPit: data[6]});
	    	  this.setState({player1Pits: pits1});
	  	      this.setState({player2Pits: pits2});
	    	  
	      });
	  }
	  
	  render() {
		  
		const {player1MainPit} = this.state;
		const {player1Pits} = this.state;
		const {player2MainPit} = this.state;
		const {player2Pits} = this.state;
		
	    const playerStyle={
	    		display: 'block'
	    };
	    
	    if (player1Pits[0] && player2Pits[0]){
	    	console.log(player1Pits[0].ammount);
		    return (
		    	<div>
	    		<h2><span className="badge badge-secondary" style={playerStyle}>Player 1</span></h2>
	    		<div className="grid">
		    	    <div className="grid-item grid-item--width2 grid-item--height2">
		    	      <img src="images/main_pit.png"/>
		    	      <Stone ammount={player1MainPit.ammount} />
		    	      <span className="ammount">{player1MainPit.ammount}</span>
		    	    </div>
		    	    <div className="grid-item grid-item-pit"><Stone ammount={player1Pits[0].ammount} /><span className="ammount">{player1Pits[0].ammount}</span></div>
		    	    <div className="grid-item grid-item-pit"><Stone ammount={player1Pits[1].ammount} /><span className="ammount">{player1Pits[1].ammount}</span></div>
		    	    <div className="grid-item grid-item-pit"><Stone ammount={player1Pits[2].ammount} /><span className="ammount">{player1Pits[2].ammount}</span></div>
		    	    <div className="grid-item grid-item-pit"><Stone ammount={player1Pits[3].ammount} /><span className="ammount">{player1Pits[3].ammount}</span></div>
		    	    <div className="grid-item grid-item-pit"><Stone ammount={player1Pits[4].ammount} /><span className="ammount">{player1Pits[4].ammount}</span></div>
		    	    <div className="grid-item grid-item-pit"><Stone ammount={player1Pits[5].ammount} /><span className="ammount">{player1Pits[5].ammount}</span></div>
		    	    <div className="grid-item grid-item-pit"><Stone ammount={player2Pits[0].ammount} /><span className="ammount">{player2Pits[0].ammount}</span></div>
		    	    <div className="grid-item grid-item-pit"><Stone ammount={player2Pits[1].ammount} /><span className="ammount">{player2Pits[1].ammount}</span></div>
		    	    <div className="grid-item grid-item-pit"><Stone ammount={player2Pits[2].ammount} /><span className="ammount">{player2Pits[2].ammount}</span></div>
		    	    <div className="grid-item grid-item-pit"><Stone ammount={player2Pits[3].ammount} /><span className="ammount">{player2Pits[3].ammount}</span></div>
		    	    <div className="grid-item grid-item-pit"><Stone ammount={player2Pits[4].ammount} /><span className="ammount">{player2Pits[4].ammount}</span></div>
		    	    <div className="grid-item grid-item-pit"><Stone ammount={player2Pits[5].ammount} /><span className="ammount">{player2Pits[5].ammount}</span></div>

		    	    
			    	<div className="grid-item grid-item--width2 grid-item--height2 last-main-pit">
		    	      <img src="images/main_pit.png"/>
		    	      <Stone ammount={player2MainPit.ammount} />	  
		    	      <span className="ammount">{player2MainPit.ammount}</span>
		    	    </div>
	    	  </div>
	    	  <h2><span className="badge badge-secondary" style={playerStyle}>Player 2</span></h2>
	    	  </div>
		    );
		} else {
			return (<div></div>);
		}
	  }
}

export default Game