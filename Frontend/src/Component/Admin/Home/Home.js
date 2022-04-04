import React, { useEffect, useState } from 'react'
import './Home.css'
import {Table,Button} from 'react-bootstrap'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
  const [userData, setuserData]=useState([])
  const [sucDel, setSucDel] = useState(false)
  const [search, setSearch] = useState('')


useEffect( ()=>{
 const  fetchData = async()=>{
  const { data } = await axios.get('/admin')
  setuserData(data)
  console.log("HELLO",userData);
  }
  fetchData()
}, [sucDel])

useEffect(()=>{
  console.log("madian shibu");
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
 function myFunction() {
   console.log("hello*****");
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
  return (  
    <>
    <div className='searchdiv' >
    <input className='searchIn' type="text" id="myInput" onKeyDown={myFunction} placeholder="Search for names.." title="Type in a name"/>
    {/* <Button className='btn' variant="outlined">Outlined</Button>\ */}
    {/* <button type='submit' className='butn'>Submit</button> */}

    </div>
         
    <div className='table'>
     
        <Table striped bordered hover id='myTable'> 
  <thead>
    <tr>
      <th>No</th>
      <th>First Name</th>
      <th>Email</th>
      <th>Action</th>

    </tr>
  </thead>
  {userData.map((details,index)=>{
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
    </>
  )
}

export default Home
