import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'

function AdminLogin() {
    const navigate = useNavigate()
    useEffect(()=>{
    const adminData = localStorage.getItem('adminInfo') ?
    JSON.stringify(localStorage.getItem('adminInfo')) : null
    if(adminData){
        navigate('/admin')
    }
    },[])
    const admin={
        name:'raziq',
        password : '12345'

    }

    const [name, setname] = useState('')
    const [password, setPassword] = useState('')

   const adminSubmit=(e)=>{
    e.preventDefault()
    console.log(name, password);
    if(admin.name === name && admin.password === password){
        localStorage.setItem('adminInfo',JSON.stringify(admin))
        navigate('/admin')
    }else{
        console.log("login failed");
    }
    }
  return (
    <div className='bodyAdmin'>
<div className="container">     
        <div className="forms">
            <div className="form login">
                <span className="title">Login</span> 

                <form onSubmit={adminSubmit}>
                    <div className="input-field">
                        <input onChange={(e)=>{setname(e.target.value)}} type="text" placeholder="Enter your Name" required/>
                        <i className="uil uil-envelope"></i>
                    </div>

                    <div className="input-field">
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" className="password" placeholder="Enter your password" required />
                        <i className="uil uil-lock icon"></i>
                        <i className="uil uil-eye-slash showHidePw"></i>
                    </div>

                    {/* <div className="checkbox-text">
                        <div className="checkbox-content">
                            <input type="checkbox" id="logCheck" />
                            <label for="logCheck" className="text">Remember me</label>
                        </div>

                        <a href="#" className="text">Forgot password?</a>
                    </div> */}

                    <div className="input-field button">
                        <input type="submit" value="Login Now" />
                    </div>
                </form>

                {/* <div className="login-signup">
                    <span className="text">Not a member?
                        <a href="#" className="text signup-link">Signup now</a>
                    </span>
                </div> */}
            </div>


                  </div>
    </div>
    </div>
  )
}

export default AdminLogin