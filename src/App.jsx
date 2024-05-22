
import './components/styles.scss'
import { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './components/winner';
import StatusMessage from './components/StatusMessage';
import History from './components/History';

const NEW_GAME =[{squares:(Array(9).fill(null)), isXNext : false}]

function App() {
  const [history,setHistory] = useState(NEW_GAME);

  const [currentMove,setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const winner = calculateWinner(gamingBoard.squares);
 
  console.log({historyLength : history.length,currentMove})
  
  
  
  const handleSquareClick = clickedPosition=>{

    if(gamingBoard.squares[clickedPosition] || winner){
        return;
    }
    
    setHistory(currnetHistory =>
    {
      const isTraversing = currentMove+1 !== currnetHistory.length;

      const lastGamingState =isTraversing?currnetHistory[currentMove] :currnetHistory[currnetHistory.length - 1];

      const nextSquareState = lastGamingState.squares.map((squaresValue,position)=>
        {
            if (clickedPosition === position)
            {
                return lastGamingState.isXNext ? 'X' : 'O';
            }
            return squaresValue;
        
        });
        const base =isTraversing
        ?currnetHistory.slice(0,currnetHistory.indexOf(lastGamingState) + 1 )
        :currnetHistory;

      return base.concat({squares : nextSquareState , isXNext : !lastGamingState.isXNext})

    });

    setCurrentMove(move => move + 1)
    
  };

  const moveTo = (move) =>{setCurrentMove(move)};


  return (
  <>
  <div className='app'>
    <StatusMessage winner={winner} gamingBoard={gamingBoard}/>
    <Board squares = {gamingBoard.squares} handleSquareClick = {handleSquareClick}/>
    <h2>Current Game history</h2>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
  </div>
  </>
  )
}

export default App;
