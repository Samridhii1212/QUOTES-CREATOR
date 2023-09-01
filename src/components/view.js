import React from 'react'
import Quotelist from './Quotelist';
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

function View() {
  const location = useLocation();
  const user = location.state.user;


  const items = JSON.parse(localStorage.getItem(user));

  
 return (
    <div className='show'>
      <h1>YOUR QUOTES</h1>
     <div className='list'>

       {items.map((data) => (
         <Quotelist
           val={data.quotes}
         />
       ))}
       

     </div>

    </div>
    
  )
}

export default View