import React, { useEffect, useState } from 'react'
import './Home.css'
import {Table,Button} from 'react-bootstrap'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
  const [userData, setuserData]=useState([])
  const [sucDel, setSucDel]=useState(false)

useEffect( ()=>{
  async function fetchData(){
  const { data } = await axios.get('/admin')
  setuserData(data)
  console.log(userData);
  }
  fetchData()
}, [sucDel])

useEffect(()=>{
  const adminData = localStorage.getItem('adminInfo') ?
  JSON.stringify(localStorage.getItem('adminInfo')) : null
  if(!adminData){
      navigate('/admin/login')
  }
  },[])
 const deleteUser = async (userId) =>{
    await axios.post('admin/deleteUser',{userId})
const a=true
    setSucDel(a)
  
 }
  return (
    <div className='table'>
      
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>First Name</th>
      <th>Email</th>
      <th>Action</th>

    </tr>
  </thead>
  {userData.map((details,index)=>{
    console.log(details);
    return(
<tbody key={details._id}>
    <tr>
      <td>{index+1}</td>
      <td>{details.name}</td>
      <td>{details.email}</td>
      <td>
        {/* <Link to={'/admin/editUser'}>Edit</Link> */}
         <Link to={`/admin/editUser/${details._id}`}>Edit</Link>
         <Button onClick={(e)=>{
           e.preventDefault()
           deleteUser(details._id)}} variant="primary" size="sm">delete</Button>      
      </td>

    </tr>
    
  </tbody>
    )
  })
}
</Table>
    </div>
  )
}

export default Home
