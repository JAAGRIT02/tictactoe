import { useState } from "react";
import Foursides from "./Foursides";

const Board = () =>{
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
    
    const renderSquare = position =>{
        return(
            <Foursides value={squares[position]} 
            onClick={()=>handleSquareClick(position)}/>
        )
    }


    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
                
            </div>
        </div>
    )
}

export default Board;