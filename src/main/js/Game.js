const React = require('react');

import Stone from './entities/Stone';

class Game extends React.Component {
	
	constructor(props: any) {
	    super(props);
	    this.state = {
	      player1Pits: [],
	      player1MainPit: [],
	      player2Pits: [],
	      player2MainPit: [],
	      currentPlayer: "player1",
	      nextPlayer: "player2"
	    };
	  }
	
	getStatus(){
		fetch('http://localhost:8080/game/status', {
			method: 'GET',
			headers: {
				'Cache-Control': 'no-cache'
			}
		})		
	      .then(response => response.json())
	      .then(data => {
	    	  if (data.finished){
	    		  alert("Winner is " + data.winner);
	    	  }
	      });
	}
	
	refreshData(){
		fetch('http://localhost:8080/game/pits', {
			method: 'GET',
			headers: {
				'Cache-Control': 'no-cache'
			}
		})		
	      .then(response => response.json())
	      .then(data => {
	    	  console.log("refreshData");
	    	  console.log(data);
	    	  console.log(this.state);
	    	  var pits1 = new Array();
			  var pits2 = new Array();
				  
		      for (var i = 0; i < 6; i++) {
		    	  pits1[i] = data[i+7];
			  }
				  
			  for (var i = 0; i < 6; i++) {
				  pits2[i] = data[i];
			  }
			  this.setState({
				  player1MainPit: data[13],
				  player2MainPit: data[6],
				  player1Pits: pits1,
				  player2Pits: pits2
			  })			 
	      });
		
	}
	
	componentDidMount() {
		this.refreshData();
	}
	
	sortPieces(item, player){		
		
		if (player == this.state.currentPlayer){
			console.log("sorting pieces!");
			fetch('http://localhost:8080/game/pits/'+item.seq+'/player/'+player, {
				method: 'PUT'
			});		
			
			
			var temp = this.state.nextPlayer;
			var current = this.state.currentPlayer;
			this.setState({
				nextPlayer: current,
				currentPlayer: temp
			});
			setTimeout(() => {
				this.refreshData()},100);
			
			setTimeout(() => {
				this.getStatus()},100);
		}
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
		    return (
		    	<div>
	    		<h2><span className={this.state.currentPlayer == "player1" ? 'badge badge-success' : 'badge badge-secondary'} style={playerStyle}>Player 1</span></h2>
	    		<div className="grid">
		    	    <div className="grid-item grid-item-main-pit grid-item--width2 grid-item--height2">
		    	      <Stone stone={player1MainPit} />
		    	      <span className="ammount">{player1MainPit.ammount}</span>
		    	    </div>
		    	    <div onClick={() => this.sortPieces(player1Pits[5], "player1")} className="grid-item grid-item-pit"><Stone stone={player1Pits[5]} /><span className="ammount">{player1Pits[5].ammount}</span></div>
		    	    <div onClick={() => this.sortPieces(player1Pits[4], "player1")} className="grid-item grid-item-pit"><Stone stone={player1Pits[4]} /><span className="ammount">{player1Pits[4].ammount}</span></div>
		    	    <div onClick={() => this.sortPieces(player1Pits[3], "player1")} className="grid-item grid-item-pit"><Stone stone={player1Pits[3]} /><span className="ammount">{player1Pits[3].ammount}</span></div>
		    	    <div onClick={() => this.sortPieces(player1Pits[2], "player1")} className="grid-item grid-item-pit"><Stone stone={player1Pits[2]} /><span className="ammount">{player1Pits[2].ammount}</span></div>
		    	    <div onClick={() => this.sortPieces(player1Pits[1], "player1")} className="grid-item grid-item-pit"><Stone stone={player1Pits[1]} /><span className="ammount">{player1Pits[1].ammount}</span></div>
		    	    <div onClick={() => this.sortPieces(player1Pits[0], "player1")} className="grid-item grid-item-pit"><Stone stone={player1Pits[0]} /><span className="ammount">{player1Pits[0].ammount}</span></div>
		    	    <div onClick={() => this.sortPieces(player2Pits[0], "player2")} className="grid-item grid-item-pit"><Stone stone={player2Pits[0]} /><span className="ammount">{player2Pits[0].ammount}</span></div>
		    	    <div onClick={() => this.sortPieces(player2Pits[1], "player2")} className="grid-item grid-item-pit"><Stone stone={player2Pits[1]} /><span className="ammount">{player2Pits[1].ammount}</span></div>
		    	    <div onClick={() => this.sortPieces(player2Pits[2], "player2")} className="grid-item grid-item-pit"><Stone stone={player2Pits[2]} /><span className="ammount">{player2Pits[2].ammount}</span></div>
		    	    <div onClick={() => this.sortPieces(player2Pits[3], "player2")} className="grid-item grid-item-pit"><Stone stone={player2Pits[3]} /><span className="ammount">{player2Pits[3].ammount}</span></div>
		    	    <div onClick={() => this.sortPieces(player2Pits[4], "player2")} className="grid-item grid-item-pit"><Stone stone={player2Pits[4]} /><span className="ammount">{player2Pits[4].ammount}</span></div>
		    	    <div onClick={() => this.sortPieces(player2Pits[5], "player2")} className="grid-item grid-item-pit"><Stone stone={player2Pits[5]} /><span className="ammount">{player2Pits[5].ammount}</span></div>

		    	    
			    	<div className="grid-item grid-item-main-pit grid-item--width2 grid-item--height2 last-main-pit">
		    	      <Stone stone={player2MainPit} />	  
		    	      <span className="ammount">{player2MainPit.ammount}</span>
		    	    </div>
	    	  </div>
	    	  <h2><span name="player2" className={this.state.currentPlayer == "player2" ? 'badge badge-success' : 'badge badge-secondary'} style={playerStyle}>Player 2</span></h2>
	    	  </div>
		    );
		} else {
			return (<div></div>);
		}
	  }
}

export default Game