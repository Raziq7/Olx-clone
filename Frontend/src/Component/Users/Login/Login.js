import React, { useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
// import { stringify } from 'nodemon/lib/utils'
// import jwt from 'jsonwebtoken'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
  const userData = localStorage.getItem('userInfo')
  if(userData){
    navigate('/')
  }
  }, [navigate])
  

 const loginSubmit =(e)=>{
   e.preventDefault()
  console.log(email,password);
  axios.post('/verifyLogin',{email,password}).then(({data})=>{
    localStorage.setItem('userInfo',JSON.stringify(data))
   
      navigate('/')
    
  })
 }
    return (
      <div className='bodyLo'>
<div className="loginU">
  <div className="login-triangle"></div>
  
  <h2 className="login-header">Log in</h2>

  <form className="login-container" onSubmit={loginSubmit}>
    <p><input className='logInput' onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" /></p>
    <p><input className='logInput' onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" /></p>
    <p><input className='logInput' type="submit" value="Log in" /></p>
  </form>
</div>
    </div>
    );
    
}
export default Login