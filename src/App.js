import logo from './logo.svg';
import './App.css';
import React from 'react';

/*
  Board needs to be made of buttons (buttons will change to either yellow/red depending on user input)
  
  Should keep track of the state of the game (win, lose, tie?)
  Should alternate between colours to indicate which player is playing

  Functions:
    -> Need to create the board (6x7 grid)
    -> Need to track where the player has moved
    -> Need to check the state of the game (mentioned above)
*/

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state ={
      rows: 6,
      columns: 7,
      moves: [],
      playerTurn: 'red',
    };
  }

  // Will reset the board
resetBoard = () => {
 this.setState({ moves: [], winner: null });
}

// Track each piece placed and its location
getPiece = (x,y) => {
  const list = this.state.moves.filter((item) => {
  return (item.x === x && item.y ===y);
  });

  return list[0];
}

getWinningMovesForVelocity = (xPosition, yPosition, xVelocity ,yVelocity) => {
  const winningMoves = [{x: xPosition, y: yPosition}];
  const player = this.getPiece(xPosition, yPosition).player;

  //Checks forward delta
  for (let delta = 1; delta <= 3; delta += 1) {
    const checkX = xPosition + xVelocity * delta;
    const checkY = yPosition + yVelocity * delta;

    const checkPiece = this.getPiece(checkX, checkY);
    if( checkPiece && checkPiece.player === player) {
      winningMoves.push({x: checkX, y: checkY});
    }
    else {
      break;
    }
  }

  // Checks reverse delta
  for (let delta = -1; delta >= -3; delta -= 1) {
    const checkX = xPosition + xVelocity * delta;
    const checkY = yPosition + yVelocity * delta;

    const checkPiece = this.getPiece(checkX, checkY);
    if( checkPiece && checkPiece.player === player) {
      winningMoves.push({x: checkX, y: checkY});
    }
    else {
      break;
    }
  }
  return winningMoves;
}

checkForWin = (x,y) => {
  const velocities = [{ x:1, y:0}, {x:0, y:1}, {x:-1, y:1}, {x:1, y:1}];
  for (let index = 0; index < velocities.length; index ++){
    const element = velocities[index];
    const winningMoves = this.getWinningMovesForVelocity(x, y, element.x, element.y)
    if (winningMoves.length > 3){
      this.setState({ winner: this.getPiece(x, y).player, winningMoves });
    }
  }
}



// This will track where the player has moved (and will add the colour)
addMove = (x,y) => {
  const { playerTurn } = this.state;
  // update the colour of the piece based on turns
  const nextPlayerTurn = playerTurn === 'red' ? 'yellow' : 'red';
  // make sure all pieces are played from the bottom -> up
  let availableYPosition = null;
  for (let position = this.state.rows - 1; position >= 0; position--) {
    if (!this.getPiece(x, position)) {
      availableYPosition = position;
      break;
    }
  }

  if (availableYPosition !== null){
    // Update the state to change player turn                                                                                    // Check for win based on next turn
  this.setState({ moves: this.state.moves.concat({ x, y: availableYPosition, player: playerTurn }), playerTurn: nextPlayerTurn }, () => this.checkForWin(x, availableYPosition, playerTurn));
  }
    
}

// Will create a board (a 6x7 grid)
createBoard() {
    const {rows, columns, winner} = this.state;
    const rowViews = [];
    // For loops will populate the rows/columns
    for (let row=0; row < this.state.rows; row += 1){
      const columnViews = [];
      for (let column=0; column < this.state.columns; column += 1){
          // Store locations of pieces
          const piece = this.getPiece(column, row);
          columnViews.push(
            // Upon clicking the button, your move will be added 
          <div button onClick = {() => {this.addMove(column, row)}} style = {{ width: '6vw', height: '6vw', backgroundColor: 'blue', border: '0.5px solid black', display: 'flex', padding: 8, cursor: 'pointer'}}>
            <div style= {{ borderRadius: '50%', backgroundColor: 'white', flex: 1, display: 'flex'}}>
              {/* Check for a piece in a certain cell, if a piece is present it will be undefined, if not it will change to colour of player */}
              {piece ? <div style = {{ backgroundColor: piece.player, flex: 1, borderRadius: '50%' }}/> : undefined}
            </div>
          </div>
          );
      }  
      rowViews.push(
        <div style = {{ display: 'flex', flexDirection: 'row' }}> {columnViews} </div>
        );
    }

    return(
      <div style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column'}}>
        {/* When the winner has won, they can click to reset the board */}
        {winner && <div onClick= {this.resetBoard} style={{position: 'absolute', left:0 ,right: 0,bottom: 0,top: 0, zIndex: 3, backgroundColor: 'rgba(216,191,216,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontWeight: '200', fontSize: '8vw'}}>{`${winner} wins!`} </div> }
        {rowViews}
      </div>
    );
  }

render() {

  return (
    <div className="App">

      <div style= {{ height: '100%', padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {this.createBoard()}
      </div>
        </div>
  );
}
}
export default App;
