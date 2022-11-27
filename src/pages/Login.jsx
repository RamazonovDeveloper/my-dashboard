import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Loader from '../components/loader/Loader';
// import { useNavigate } from 'react-router-dom'
import './login.css'

export default function Login(props) {

  // const navigate = useNavigate()

  // const token = [
  //   {
  //     userName:'WebDev',
  //     password:'123456'
  //   },
  //   {
  //     userName:'Azizbek',
  //     password:'abcdef'
  //   }
  // ]
  
  // console.log(JSON.stringify(token));
  // localStorage.setItem('registred', JSON.stringify(token))

  const login = (e) => {

    console.log('button worked ');

    e.preventDefault()

    setLoading(true)

    const registred = JSON.parse(localStorage.getItem('registred'))

    registred.forEach(item => {
      if(item.userName == userName){
        if(item.password == password){
          setTimeout(() => {
            props.setLogin(true)
          }, 100);
        }else{
          alert('Wrong password')
        }
      }
    })
    setTimeout(() => {
      setLoading(false)
    }, 100);
    
  }


  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)


  return (
    <div className='big d-flex justify-content-center align-items-center'>
      
      {
        loading 
          ? 
            <Loader/>
          :
          <div className='my-form form-control'>
            <h3>Login</h3>
            <form className='my-form-item' onSubmit={login}>
              <input className='form-control' type="text" placeholder='Username...' onChange={(e) => setUserName(e.target.value)}/>
              <input className='form-control' type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)}/>
              <div className='d-flex justify-content-between'>
                <button className='btn btn-primary' type='submit'>Login</button>
                <Link className='btn btn-primary' to={'/registration'}>Register</Link>
              </div>
            </form>
          </div>
      }

      {/* <div className='my-form form-control'>
        <h3>Login</h3>
        <form className='my-form-item' onSubmit={login}>
          <input className='form-control' type="text" placeholder='Username...' onChange={(e) => setUserName(e.target.value)}/>
          <input className='form-control' type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)}/>
          <div className='d-flex justify-content-between'>
            <button className='btn btn-primary' type='submit'>Login</button>
            <Link className='btn btn-primary' to={'/registration'}>Register</Link>
          </div>
        </form>
      </div> */}
    </div>
  )
}
