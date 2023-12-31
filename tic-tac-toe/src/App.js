import { useState } from 'react';


function Square({ value, onSquareClick }) {
    return <button className="square" onClick={onSquareClick}>{value}</button>;
}


export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setxIsNext] = useState(true);
    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = `${winner} ganhou!`
    }
    else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }


    function handleClick(squarePosition) {
        if (squares[squarePosition] || winner) {
            return;
        }
        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[squarePosition] = "X";
        }
        else {
            nextSquares[squarePosition] = "O";
        }

        setSquares(nextSquares);
        setxIsNext(!xIsNext);
    }

    return (
        <div className='board'>
            <div className="status">{status}</div>

            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    )
}

function calculateWinner(squares) {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let winningPositions of winningLines) {
        const [position1, position2, position3] = winningPositions;
        if (squares[position1] && squares[position1] === squares[position2] && squares[position1] === squares[position3]) {
            return squares[position1];
        }
    }
    return null;
}