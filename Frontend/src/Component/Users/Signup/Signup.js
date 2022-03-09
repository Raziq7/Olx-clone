import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Signup.css'

function Signup() {

  const navigate = useNavigate()
  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCpassword] = useState('')
    const [err, setErr] = useState(false)

    const signupForm=async(event)=>{
        event.preventDefault()
        // const config = {
        //   header:{
        //     "Content-type":"application/json"
        //   }
        // }
        if(password !== cPassword){
          setErr(true)
        }else{
          setErr(false)
          try{

            const {data}= await axios.post('/',{name,email,password})  
            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data))
            navigate('/')
            

          }catch(err){
            console.log("error",err);
          }
        }
    }

  return (
    <div>
        <div className="all">
	<div className="parent">
		<form onSubmit={signupForm}>
			<h3>SIGN UP</h3>
      {err ? <h2 style={{color:'red'}}>Password doesn't match</h2>:null}
			<div className="nice-one"></div>
			<div className="nice-two"></div>
			<div className="nice-three"></div>
			<input onChange={(e)=>{setName( e.target.value)}} type="text" name='name' className="in-name" placeholder="NAME"/>
			<input onChange={(e)=>{setEmail( e.target.value)}} type="text" name='email' className="in-name" placeholder="E-MAIL"/>
			<input onChange={(e)=>{setPassword( e.target.value)}} type="password" name='password' className="in-name" placeholder="PASSWORD"/>
			<input onChange={(e)=>{setCpassword(e.target.value)}} type="password" name='cpassword' className="in-name" placeholder="Confirm Password"/>

			<button type='submit' className="btn btn-day"><div className="one">SIGN IN</div><div className="two">LOGIN</div></button> 
		</form>
	</div>
</div>
    </div>
  )
}

export default Signup