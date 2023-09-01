import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Create() {
  const [data, setdata] = useState('');
  const location = useLocation();
  const user = location.state.user
  //console.log(user)
 
  
  const create=()=>
  {
    alert("SUCCESSFULLY CREATED")
    let getdata=localStorage.getItem(user);
    let myarray = [];
    if(getdata&&getdata!=null)
    {
      
      let finaldata=JSON.parse(getdata);
      myarray=finaldata


    }
    myarray.push({quotes:data});
    let setdata = JSON.stringify(myarray)
    localStorage.setItem(user, setdata)
  


  }

  
  return (
    <div className='create-quote'>
      <h1>write your thought!!</h1>
      <input type='text' onChange={(e)=>setdata(e.target.value)} className='create' />
      <br/>
      <button onClick={create}>Add</button>
      </div>
  )
}

export default Create
