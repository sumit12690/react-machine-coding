import { useState } from "react";

function checkWinner(board, size) {
    const lines = [];
    for(let i =0; i < size; i++) {
        lines.push(board.slice(i*size, i*size+size));
        lines.push(board.filter((_, id) => (id%size) === i));
    }
    lines.push(board.filter((_, id) => (id%(size+1)) === 0));
    lines.push(board.filter((_, id) => (id%(size-1)) === 0 && id != 0 && id !== size*size-1));

    for(const line of lines) {
        if(line.every((c) => c === "X"))
            return "X"
         if(line.every((c) => c === "O"))
            return "O"
    }
    return null;
}


function TicTacToe({size, timeLimit}) {
    const emptyBoard = Array(9).fill(null);
    const [board, setBoard] = useState(emptyBoard);
    //players are X and o
    const [xIsNext, setXIsNext] = useState(false);
    const [winner, setWinner] = useState(false);

    const handleClick = (index) => {
        if(board[index] || winner) {
            return;
        }
        const newBoard = Array.from(board);
        newBoard[index] = xIsNext ? "X" : "O";
        setBoard([...newBoard])
        setXIsNext(!xIsNext)
        const gameWinner = checkWinner(board, 3)
        if(gameWinner) setWinner(gameWinner);
    }
    

  return (
    <div className="flex flex-col items-center gap-4">
        <h1 className="text-xl font-bold">
            Tic Tac Toe
        </h1>
        <p>Turn: {xIsNext? "X": "O" }</p>
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${3}, 80px)` }}>
            {
                board.map((cell, i) => {
                    return (<button key ={i}
                    onClick={() => handleClick(i)}
                    className="w-20 h-20 text-2xl border rounded-lg"
                    >
                        {cell}
                    </button>)
                })
            }
        </div>
        {winner && <p className="text-green-600 font-bold">{winner} Wins!</p>}
        {!winner  && !board.includes(null) && <p className="text-red-600 font-bold">Draw!</p>}
    </div>
  )
}

export default TicTacToe
