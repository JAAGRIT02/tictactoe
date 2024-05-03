import Foursides from "./Foursides";

const Board = () =>{
    return (
        <div className="Board">
            <div className="board-row">
                <Foursides value={0}/>
                <Foursides value={1}/>
                <Foursides value={2}/>
            </div>
            <div className="board-row">
                <Foursides value={3}/>
                <Foursides value={4}/>
                <Foursides value={5}/>
            </div>
            <div className="board-row">
                <Foursides value={6}/>
                <Foursides value={7}/>
                <Foursides value={8}/>
            </div>
        </div>
    )
}

export default Board;