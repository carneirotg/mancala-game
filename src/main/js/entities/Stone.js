import React from 'react'

export default class Stone extends React.Component {

  createStones() {
    let stones = [];
    console.log("createStones!");
    
    for (let j = 0; j < this.props.ammount; j++) {
    	stones.push(<div className="grid-item-stone"><img key={Math.random()} className="stoneImage" src="images/stone.png" /></div>)
    }
    
    return stones
  }


  render() {
	  console.log(this.props);
	  
	  return(
    	<div className="grid-stone">
    		{this.createStones()}
    	</div>
    )
  }

}