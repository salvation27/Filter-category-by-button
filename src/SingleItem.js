import React from 'react'

export default function SingleItem({item}) {
 const {title,description} = item
  return (
    <div className='item'>
        <h3>{title}</h3>
        <p>{description}</p>
        
    </div>
  )
}
