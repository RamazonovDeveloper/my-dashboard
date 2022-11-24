import React from 'react'

import './header.css'

export default function Header(props) {
  return (
    <div className='head d-flex justify-content-between align-items-center'>
      <p>Header comp</p>
      <button onClick={() => {props.setModal(true)}} className='btn btn-secondary'>Add user</button>
    </div>
  )
}
