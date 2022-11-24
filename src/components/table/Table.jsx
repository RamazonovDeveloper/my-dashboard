import React, { useEffect, useState } from 'react'

import './table.css'

import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

import Modal from '../modal/Modal'

export default function Table(props) {
  // you can see main code here
  let [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')))

  const delBtn = (id) => {
    users = users.filter( (el) => el.id != id)

    localStorage.setItem('users',JSON.stringify(users))

    setUsers(users)
  }

  useEffect(() => {
    console.log("Users ozgardiiii");
    console.log(users);
  });


  return (
    <div className='my-table'>

        <h2 className='table-name'>Product Sales</h2>
        {
          props.isModalOpen ? <Modal users={users} setUsers={setUsers} closeModal={props.closeModal}/> : ''
        }
        <div className='data-box'>
          <table className='data-table'>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          {
            users.map((elem, key)=>{
              return <tr key={key}>
                  <td>{(elem.id<10) ? `0${elem.id}` : elem.id}</td>
                  <td>{elem.name}</td>
                  <td>{elem.date}</td>
                  <td>{elem.email}</td>
                  <td>{elem.status ? <span style={{color:"green"}}>Success</span> : <span style={{color:"red"}}>Cancel</span>}</td>
                  <td><button className='btn btn-primary'><AiFillEdit/></button><button className='btn btn-danger ms-2' onClick={() => delBtn(elem.id)}><AiFillDelete/></button></td>
                </tr>
            })
          }

          </table>

          
          {/* <div className='my-col'>
            <div className='no'>No</div>
            <div className='name'>Name</div>
            <div className='date'>Date</div>
            <div className='amount'>Amount</div>
            <div className='status'>Status</div>
            <div className='action'>Action</div>
          </div>
          {
            users.map((elem) => {
              return <div className='my-col'>
              <div className='no'>{(elem.id<10) ? `0${elem.id}` : elem.id}</div>
              <div className='name'>{elem.name}</div>
              <div className='date'>{elem.date}</div>
              <div className='amount'>{elem.amount}</div>
              <div className='status'>{elem.status}</div>
              <div className='action'>Action</div>
            </div>
            })
          } */}
        </div>
    </div>
  )
}
