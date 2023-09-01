import React from 'react'
import { Outlet, Link,useNavigate,useLocation} from "react-router-dom";

function Main() {

  const location=useLocation();
  const user=location.state.name

  const navigate=useNavigate();
  const view = () => { navigate("/view", { state: { user: user }})}
  const create = () => { navigate("/create",{state:{user:user}}) }
  const logout = () => { navigate("/") }
  return (
        <div className='nav'>
        <button onClick={view}>VIEW QUOTES</button>
         <button onClick={create}>CREATE QUOTES</button>
         <button onClick={logout} className=''>LOGOUT</button>
           
              
                
            
        </div>
    
  )
}

export default Main