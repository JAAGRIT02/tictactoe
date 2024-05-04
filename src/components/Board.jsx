import { useState } from "react";
import Foursides from "./Foursides";

const Board = () =>{
    const[squares,setSquares]= useState(Array(9).fill(null))
    return (
        <div className="board">
            <div className="board-row">
                <Foursides value={squares[0]}/>
                <Foursides value={squares[1]}/>
                <Foursides value={squares[2]}/>
            </div>
            <div className="board-row">
                <Foursides value={squares[3]}/>
                <Foursides value={squares[4]}/>
                <Foursides value={squares[5]}/>
            </div>
            <div className="board-row">
                <Foursides value={squares[6]}/>
                <Foursides value={squares[7]}/>
                <Foursides value={squares[8]}/>
            </div>
        </div>
    )
}

export default Board;