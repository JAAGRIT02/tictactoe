// eslint-disable-next-line react/prop-types
const Foursides = ({ value,onClick,isWinningSquare })=>{

    const colorClassname = value === 'X' ?'text-green':'text-orange';
    const winningClassname = isWinningSquare?'winning':'';

    return (
        <button type="button" 
        className={`square ${colorClassname} ${winningClassname}`} 
        onClick={onClick}>
            {value}
        </button>
    );
}

export default Foursides;