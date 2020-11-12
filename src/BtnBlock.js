import React from 'react'

export default function BtnBlock({handleBtns}) {
  return (
    <div className='btn_wrapper'>
      <button
      onClick={handleBtns}
      value='All'
      >
      All</button>

        <button
        onClick={handleBtns}
        value='react'
        >
        React</button>


      <button 
      onClick={handleBtns}
      value='javascript'>Javascript</button>


      <button 
      onClick={handleBtns}
      value='angular'>Angular</button>
    </div>
  )
}
