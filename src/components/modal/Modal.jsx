import React, { useState } from 'react'

import './modal.css'

export default function Modal(props) {
    
    
    const AddUser = (e) => {

        e.preventDefault()

        console.log("Add user worked");
        console.log(props.users);

        const today = new Date()

        const user = {
            id:props.users[props.users.length - 1].id + 1,
            name:name,
            email:email,
            date:`${today.getDay()}-${today.getMonth()}-${today.getFullYear()}`,
            amount:amount,
            status:status
        }

        props.users[props.users.length] = user

        props.setUsers(props.users)

        localStorage.setItem('users',JSON.stringify(props.users))

        props.closeModal(false)

        // console.log(users);



        // console.log(users)
        // console.log(user)

    }

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [amount, setAmount] = useState('')
    let [status, setStatus] = useState(false)

  return (
    <div className="my-modal">
        <div className="my-modal-content">
            <form>
                <label className='mb-2 mt-1' htmlFor="name">Name</label>
                <input className='form-control' type="text" id="name" onChange={(e) => setName(e.target.value)}/>
                <label className='mb-2 mt-1' htmlFor="email">Email</label>
                <input className='form-control' type="text" id="email"  onChange={(e) => setEmail(e.target.value)}/>
                <label className='mb-2 mt-1' htmlFor="amount">Amount</label>
                <input className='form-control' type="text" id="amount"  onChange={(e) => setAmount(e.target.value)}/>
                <div className='d-flex align-items-center'>
                    <label className='mb-2 mt-1' htmlFor="status">Status</label>
                    <input className='ms-3' type="checkbox" name="" id="status" onChange={(e) => { (e.target.value == 'on') ? setStatus(true) : setStatus(false)}}/>
                </div>
                
                <div className='d-flex justify-content-between mt-1'>
                    <button className='btn btn-warning' onClick={() => props.closeModal(false)}>Cancel</button>
                    <button className='btn btn-success' onClick={AddUser} type='submit'>Add</button>
                </div>
            </form>
        </div>
    </div>
  )
}
