const StatusMessage = ({winner,gamingBoard})=>{

    const {squares,isXNext} = gamingBoard;
    
    const noMovesLeft = squares.every(squaresValue =>squaresValue !== null);
    
    const nextPlayer = isXNext ? 'X':'O';
    
    const renderStatusMessage = ()=>{
        if (winner){
            return (
            <>
                WINNER IS {' '}
                <span className={winner === 'X'?'text-green':'text-orange' }>
                {winner}
                </span>
            </>);
        }

        if (!winner && noMovesLeft){
            return( 
            <>
                <span className="text-green">X
                </span> AND {' '}
                <span className="text-orange">O
                </span> HAS TIED
            </>);
        }

        if (!winner && !noMovesLeft){
            return (
            <>
                THE NEXT PLAYER IS {''}
                <span className={isXNext?'text-green':'text-orange'}>
                {nextPlayer}
                </span>
            </>);
        }

        return null;
    }

    return <h2 className="status-message"> {renderStatusMessage()} </h2>;
  
};




export default StatusMessage;