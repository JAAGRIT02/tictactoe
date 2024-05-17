const StatusMessage = (winner,isXNext,squares)=>{
    const noMovesLeft = squares.every(squareValue => {
        return squareValue !== null;
    } );
    
    const nextPlayer = isXNext ? 'X':'O';
    
    const renderStatusMessage = ()=>{
        if (winner){
            return <div>WINNER IS {winner}</div>;
        }

        if (!winner && noMovesLeft){
            return <div>X AND O HAS TIED</div>;
        }

        if (!winner && !noMovesLeft){
            return <div>THE NEXT PLAYER IS {nextPlayer}</div>
        }

        return null;
    }

    return <div className="status-message">{renderStatusMessage()}</div>;
  
};




export default StatusMessage;