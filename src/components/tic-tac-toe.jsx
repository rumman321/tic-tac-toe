
import { useState } from 'react'
import useTictacToe from '../hooks/use-tic-tac-toe'

function TicTacToe() {
    
    const {board,calculateWinner,handleClick,getStatusMessage,resetGame}=useTictacToe()
  return (
    <div className='game'>
      <div className='status'>{getStatusMessage()}
        <button className='reset-btn' onClick={resetGame}>Reset</button>
      </div>

      <div className="board">
        {board.map((b,index)=>{
          return <button key={index} className='cell' 
          onClick={()=>handleClick(index)}
          disabled={b!==null}
          >
            {b}
            </button>
        })}
      </div>
    </div>
  )
}

export default TicTacToe
