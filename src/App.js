import React, { Component } from 'react'
import {data as data_bat} from './data'
import ItemList from './ItemList'

export default class App extends Component {

  state ={
    items:data_bat,
    itemsAll:data_bat
  }
  
  // filtering button

  handleBtns = (e) => {
     let productCopy
     if(e.target.value === 'All'){
      productCopy=this.state.items
     } else {
      productCopy=this.state.items.filter((item)=>item.cat===e.target.value)
     }
     this.setState({
      itemsAll:productCopy
     })
  }


  render() {
    return (
      <div>
        <h1>Фильтрация по категории</h1>
        
        <ItemList items ={this.state.itemsAll} handleBtns={this.handleBtns} />
      </div>
    )
  }
}

