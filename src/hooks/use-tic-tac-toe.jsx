import { useState } from "react"


const initialBoard = () =>Array(9).fill(null)
const useTictacToe=()=>{
    const [board,setBoard]=useState(initialBoard())
    const [isXNext,setisXNext]=useState(true)

    const WINNING_PATTERNS=[
        [0,2,3],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    const calculateWinner=(currentBoard)=>{
        for (let i = 0;i < WINNING_PATTERNS.length;i++) {
           const [a,b,c]= WINNING_PATTERNS[i]
           if(currentBoard[a]&& 
            currentBoard[a]===currentBoard[b]&&
            currentBoard[a]===currentBoard[c]){
                return currentBoard[a]
            }
        }
        return null
    }
    const handleClick=(index)=>{
        //winner check
        const winner=calculateWinner(board)
        console.log(winner)
        if(winner||board[index]) return

        const newBoard=[...board]
        newBoard[index]=isXNext?'X':'O'
        setBoard(newBoard)
        setisXNext(!isXNext)
    }
    const getStatusMessage=()=>{
        const winner=calculateWinner(board)
        if(winner) return `player ${winner} wins`
        if(!board.includes(null)) return `it's a draw`
        return `player ${isXNext ? 'X':'O'} turn`
    }
    const resetGame=()=>{
        setBoard(initialBoard())
        setisXNext(true)
    }

    return {board,calculateWinner,handleClick,getStatusMessage,resetGame}
}

export default useTictacToe