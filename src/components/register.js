import React, { useState } from 'react';
import { GiPoliceBadge } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";


function Register() {
    const [email,setemail]=useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    


    const submit=(event)=>
    {
        
        event.preventDefault();
        let data=localStorage.getItem("getquotes");
        

        let myarray=[{"finalemail":""}];

        if(data&&data!==null)
         {
            let finaldata=JSON.parse(data);
            myarray=finaldata
            
         }

        //myarray['finalemail']=email;
        myarray.push({finalemail:email,finalpassword:password,user:username})
        console.log(myarray)

        let setdata=JSON.stringify(myarray)
        localStorage.setItem('getquotes',setdata)
    }

       
    const style = {
        color: "#6D5454",
        fontSize: "100px",
        marginTop: "100px",
        marginLeft: "150px"
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
                    <h3>REGISTER</h3>
                </div>
                <div className='right'>

                    
                    <input 
                    type="text" 
                    placeholder='email' 
                    onChange={(e)=>setemail(e.target.value)} 
                    
                    />
                    <input 
                    type="text" 
                    placeholder='username'
                    onChange={(e) => setusername(e.target.value)}
                     />

                    <input
                     type="password"
                    placeholder='password' 
                    onChange={(e) => setpassword(e.target.value)}

                      />
                    <button onClick={submit} >Register</button>
                    
                    

                </div>
            </div>


        </div>
    )
}

export default Register