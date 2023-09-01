import React from 'react'
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Front() {
    const style = {
        color: "black",
        fontSize: "30px",
       
    }
    const navigate=useNavigate();
 const account= () => { navigate("/choose") }
  return (
    <div className='front'>
        <nav>
              <BsPencilSquare style={style} />
              <button >About</button>
              <button>Contact</button>
              <button>Home</button>
              <button onClick={account}>Account</button>
        </nav>
        <div className='frontwrite'>
            <div className='leftwrite'><h1>Frame your thoughts to words</h1></div>
            <div className='rightwrite'>
            <img 
            src="https://e1.pxfuel.com/desktop-wallpaper/248/957/desktop-wallpaper-why-poetry-is-a-beautiful-art-form-book-pen.jpg" 
            height="400px"
            width="500px"
            />
            </div>
        </div>
        
        
                  
          
       </div> 
   
  )
}

export default Front