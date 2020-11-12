import React from 'react'
import SingleItem from './SingleItem'
import BtnBlock from './BtnBlock'
export default function ItemList({items,handleBtns}) {
  
  return (
    <>
    <BtnBlock handleBtns={handleBtns} />
    <div>
      {
        items.map(item=><SingleItem key={item.id} item={item} />)
      }
    </div>
    </>
  )
}
