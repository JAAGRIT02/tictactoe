
import './components/styles.scss'
import { useState } from 'react';
import Board from './components/Board'


function App() {

  const[squares,setSquares]= useState(Array(9).fill(null));
  const[isXNext,setIsXNext]= useState(false);

  console.log(squares);
  const handleSquareClick = clickedPosition=>{

    if(squares[clickedPosition]){
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
    <h2>NEXT PLAYER IS SOMEBODY</h2>
    <Board squares = {squares} handleSquareClick = {handleSquareClick}/>
  </div>
  </>
  )
}

export default App
