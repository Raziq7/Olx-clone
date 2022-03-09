import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import React,{useEffect, useState} from 'react'
import './userEdit.css'

function  UerEdit() {
 const navigate =useNavigate()
  const [name, setName] = useState('')

  const [email, setEmail] = useState('')


  const params = useParams()
  useEffect(async() => {
  
    console.log(params.id);
    const response = await axios.get(`/admin/userEdit/${params.id}`)
    console.log(response.data.name);
    setName(response.data.name)
    setEmail(response.data.email)

  console.log(email,name);
   
  }, [])
const userId = params.id
  const editSubmitHandler =async (e)=>{
    e.preventDefault()
    await axios.post("/admin/editUserDetail",{name,email,userId})
    navigate('/admin')
  }
  
  return (
    <div style={{marginTop:"60px"}} >
      <h3 style={{textAlign:"center"}}>Edit user</h3>

<div className="container">
  <form>
    <label for="fname">Name</label>
    <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>

    <label for="lname">Email</label>
    <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

    <input style={{height:"30px"}} type="submit" value="Submit" onClick={editSubmitHandler}/>
  </form>
</div>
    </div>
  )
}

export default UerEdit