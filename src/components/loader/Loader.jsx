import React from 'react'
import load from '../../assets/VAyR.gif'
import './loader.css'

export default function Loader() {
  return (
    <div className='loader'>
        <div>
            <img src={load} alt="" />
        </div>
    </div>
  )
}
