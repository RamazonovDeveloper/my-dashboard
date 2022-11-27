import React, { useState } from 'react'

import './modal.css'

export default function EditModal(props) {
    
    let selectedUser = props.users.filter((item) => item.id == props.userId)[0]

    let [name, setName] = useState(selectedUser.name)
    let [email, setEmail] = useState(selectedUser.email)
    let [amount, setAmount] = useState(selectedUser.amount)
    let [status, setStatus] = useState(selectedUser.status)

    let changedUsers = props.users
    
    // console.log("Selected user is ");
    // console.log(selectedUser);
    // console.log("User name is");
    // console.log(selectedUser.name);  

    const EditUser = (e) => {

        e.preventDefault()

        const user = {
            id:selectedUser.id,
            name:name,
            email:email,
            amount:amount,
            status:status
        }

        for (let index = 0; index < changedUsers.length; index++) {
            const element = changedUsers[index];

            if (element.id == selectedUser.id) {
                changedUsers[index].name = user.name
                changedUsers[index].email = user.email
                changedUsers[index].amount = user.amount

                props.setUsers(changedUsers)
            }
            
        }

        props.closeEditMod(false)

    }



  return (
    <div className="my-modal">
        <div className="my-modal-content">
            <form>
                <label className='mb-2 mt-1' htmlFor="name">Name</label>
                <input value={name} className='form-control' type="text" id="name" onChange={(e) => setName(e.target.value)}/>
                <label className='mb-2 mt-1' htmlFor="email">Email</label>
                <input value={email} className='form-control' type="text" id="email"  onChange={(e) => setEmail(e.target.value)}/>
                <label className='mb-2 mt-1' htmlFor="amount">Amount</label>
                <input className='form-control' type="text" id="amount"  onChange={(e) => setAmount(e.target.value)}/>
                <div className='d-flex align-items-center'>
                    <label className='mb-2 mt-1' htmlFor="status">Status</label>
                    <input className='ms-3' type="checkbox" name="" id="status" onChange={(e) => { (e.target.value == 'on') ? setStatus(true) : setStatus(false)}}/>
                </div>
                
                <div className='d-flex justify-content-between mt-1'>
                    <button className='btn btn-warning' onClick={() => props.closeEditMod(false)}>Cancel</button>
                    <button className='btn btn-success' type='submit' onClick={(e) => EditUser(e)}>Edit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
