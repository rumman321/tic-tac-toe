
import { useState } from 'react'
import './App.css'

function App() {
  
  const initialBoard = () =>Array(9).fill(null)
  const [board,setBoard]= useState(initialBoard())
  console.log(board)
  return (
    <div className='game'>
      <div className='status'>Player X turn 
        <button className='reset-btn'>Reset</button>
      </div>

      <div className="board">
        {board.map((_,index)=>{
          return <button key={index} className='cell'>x</button>
        })}
      </div>
    </div>
  )
}

export default App
