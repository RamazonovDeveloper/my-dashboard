import React, { useState } from 'react'

export default function Registration(props) {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = () => {
    let registred = JSON.parse(localStorage.getItem('registred'))

    console.log("registred users : ");
    console.log(registred);

    const newUser = {
      userName:userName,
      password:password
    }

    console.log("new user : ");
    console.log(newUser);

    registred[registred.length] = newUser 

    console.log("after update");
    console.log(registred);

    props.setLogin(true)

    localStorage.setItem('registred', JSON.stringify(registred))
  }

  return (
    <div className='big d-flex justify-content-center align-items-center'>
      <div className='my-form form-control'>
        <h3>Registration</h3>
        <form className='my-form-item' onSubmit={registerUser}>
          <input className='form-control' type="text" placeholder='Username...' onChange={(e) => setUserName(e.target.value)}/>
          <input className='form-control' type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)}/>
          <div className='d-flex justify-content-between'>
            <button className='btn btn-primary'>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}
