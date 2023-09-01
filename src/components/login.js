import React from 'react';
import { GiPoliceBadge } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { useState } from 'react';
import { useNavigate,Navigate,Link } from 'react-router-dom';

function Login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate=useNavigate();
  

  const login=()=>
  {
    const items = JSON.parse(localStorage.getItem('getquotes'));
    //console.log(items)
    let ecount=0,pcount=0;
    let user;
    items.map((e) => {
      if(email==e.finalemail)
      {
        ecount=ecount+1
        user=e.user
      }
    })
    items.map((e) => {if(password== e.finalpassword) pcount = pcount + 1 })

    if(ecount==1&&pcount>=1)
    {
      alert(`welcome ${user}`)
      // navigate(`/main/?name=${user}`)
      navigate("/main",{state:{name:user}})
    }
     else alert("invalid user");

  }

  const style = { 
    color: "#6D5454", 
    fontSize: "100px",
    marginTop:"100px",
    marginLeft:"150px"
  }
  return (
    <div className='main'>
        <div className='inner'>
         <div className='left'> 
        <div class="loginlogo">
          <BiUserCircle
          style={style}
         />
          </div>
          <h3>LOGIN</h3>
          </div>
          <div className='right'>
               
          <input type="text" placeholder='email' onChange={(e) => setemail(e.target.value)}/>
          <input type="password" placeholder='password' onChange={(e) => setpassword(e.target.value)}/>
          <button onClick={login}>login</button>

          </div>
        </div>
        
       
    </div>
  )
}

export default Login