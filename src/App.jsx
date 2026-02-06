import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import Statistics from './pages/Statistics/Statistics'
import Monitoring from './pages/Statistics/StatisticsPages/Monitoring/Monitoring'
import Yer_maydonlari from './pages/Statistics/StatisticsPages/Yer maydonlari/Yer_maydonlari'
import Ombor from './pages/Statistics/StatisticsPages/Ombor/Ombor'
import Fermer_xojaligi from './pages/Statistics/StatisticsPages/Fermer xo’jaligi/Fermer_xojaligi'
import Ish_jarayonlari from './pages/Statistics/StatisticsPages/Ish jarayonlari/Ish_jarayonlari'
import CreateAccount from './pages/CreateAccount/CreateAccount'
import Successfull_Login from './pages/Successfull_Login/Successfull_Login'
import AddSeason from './pages/Statistics/StatisticsPages/AddSeason/AddSeason'
import UserInfo from './pages/Statistics/StatisticsPages/UserInfo/UserInfo'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/statistics' element={<Statistics/>}>
          <Route index element={<Monitoring/>} />
          <Route path="monitoring" element={<Monitoring/>} />
          <Route path='yermaydonlari' element={<Yer_maydonlari/>} />
          <Route path='ombor' element={<Ombor/>} />
          <Route path='fermerxojaligi' element={<Fermer_xojaligi/>} />
          <Route path='ishjarayonlari' element={<Ish_jarayonlari/>} />
          <Route path='addseason' element={<AddSeason/>} />
          <Route path='userinfo' element={<UserInfo/>} />
        </Route>
        <Route path='/createaccount' element={<CreateAccount/>}/>
        <Route path='/successfullLogin' element={<Successfull_Login/>}/>
      </Routes>
    </div>
  )
}

export default App
