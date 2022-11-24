import React from 'react'

export default function Form() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input className='form-control' type="text" id="name" />
      <label htmlFor="email">Email</label>
      <input className='form-control' type="text" id="email" />
      <div>
        <label htmlFor="status">Status</label>
        <input type="checkbox" name="" id="status" />
      </div>
      <label htmlFor="amount">Amount</label>
      <input className='form-control' type="text" id="amount" />
    </form>
  )
}
