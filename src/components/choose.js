import React from 'react';
import Login from './login';
import Register from './register';
import { useState } from 'react';
//import Toggle from "react"

function Choose()
{
const [state,changeState]=React.useState(true);
function change()
{
    changeState(!state)
}

return(
<div>
<button onClick={change} className='change'>{state ?"REGISTER":"LOGIN"}</button>
{state?<Login/>:<Register/>}
</div>

)
}
export default Choose;