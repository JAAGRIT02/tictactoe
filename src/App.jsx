
import './components/styles.scss'
import { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './components/winner';
import StatusMessage from './components/StatusMessage';


function App() {

  const[squares,setSquares]= useState(Array(9).fill(null));
  const[isXNext,setIsXNext]= useState(false);


  const winner = calculateWinner(squares);
  
  // console.log(winner);

  // console.log(squares);
  
  const handleSquareClick = clickedPosition=>{

    if(squares[clickedPosition] || winner){
        return;
    }
    
    setSquares(currnetSquares =>
    {

        return currnetSquares.map((squaresValue,position)=>
        {
            if (clickedPosition === position)
            {
                return isXNext ? 'X' : 'O';
            }
            return squaresValue;
        
        });
    });
    setIsXNext(currentIsXNext => !currentIsXNext)
};


  return (
  <>
  <div className='app'>
    <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
    <Board squares = {squares} handleSquareClick = {handleSquareClick}/>
  </div>
  </>
  )
}

export default App;
