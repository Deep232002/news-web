import React, { Component } from 'react'
import Loading_icon from './Loading_icon.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
         <img src={Loading_icon} alt="Loading" />
      </div>
    )
  }
}
