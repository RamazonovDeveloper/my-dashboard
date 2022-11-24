import {Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
// import 
import Navbar from './components/navbar/Navbar'
import Table from './components/table/Table'
import Header from './components/header/Header'
import Login from './pages/Login';
import Registration from './pages/Registration';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false)

  const [modal, setModal] = useState(false)

  console.log(login)
  return (
    <div className="App">

    {
      !login
        ?(
          <Routes>
              <Route path="/login" element={<Login setLogin={setLogin} />} />
              <Route path="/registration" element={<Registration setLogin={setLogin}/>} />
              <Route path="/*" element={<Navigate replace to="/login" />} />
          </Routes>
        ) : (
          <div className='main'>
            <Navbar className=''/>
            <div className='parts'>
              <Header setModal={setModal}/>
              <div className='main-part'>
                <Routes>
                  <Route path='/tables' element={<Table isModalOpen={modal} closeModal={setModal}/>}/>
                  <Route path='/about' element={<>This is about comp</>}/>
                  <Route path='/company' element={<>Company information here</>}/>
                </Routes>
              </div>
            </div>
          </div>
        )
    }


    </div>

// {
//   !login
//       ? (
          // <Routes>
          //     <Route path="/login" element={<Login setLogin={setLogin} />} />
          //     <Route path="/screen" element={<LockScreen />} />
          //     <Route path="/*" element={<Navigate replace to="/login" />} />
          // </Routes>
//       ) : (
//           <div className={s.main}>
//               <Navbar />
//               <div className={s.all}>
//                   <Header setLogin={setLogin} />
//                   <Routes>
//                       <Route path="/home" element={<Home />} />
//                       <Route path="/table" element={<Table />} />
//                       <Route path="/charts" element={<Charts />} />
//                       <Route path="/settings" element={<Settings />} />
//                       <Route path="/*" element={<h1>Not Found! 404</h1>} />
//                   </Routes>
//               </div>
//           </div>
//       )
// }
  );
}

export default App;
