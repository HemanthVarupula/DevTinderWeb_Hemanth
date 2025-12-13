import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from './utils/constant';
const Login = () => {
  const [error,setError]=useState("");
  const dispatch=useDispatch()
  const [emailId,setEmailId]=useState("deepakvarupula@gmail.com");
  const [password,setPassword]=useState("deepakh@123");
   const navigate=useNavigate();
  const handleLogin= async()=>{
    try{
      const res=await axios.post(BASE_URL+"/login",
      {emailId,password},
         { withCredentials: true }
      )
      // console.log(res.data)
      dispatch(addUser(res.data))
      return navigate("/")
    }catch(err){
      setError(err?.response.data.message||"something went wrong")
      console.log(err.message)
    }
  }
  return (
    <>
    <div className='flex justify-center'>
    <div className="card  w-96 shadow-sm  h-78 bg-black">
  <div className="card-body">
    <h2 className="card-title">Login</h2>
    <div className='my-2'>
      <fieldset className="fieldset">
       <legend className="fieldset-legend">What is your Email?</legend>
       <input type="text" className="input"  value={emailId} placeholder="Enter your Email" onChange={(e)=>setEmailId(e.target.value)}  />
      </fieldset>
         <fieldset className="fieldset">
       <legend className="fieldset-legend">What is your Password?</legend>
       <input type="password" className="input" value={password} placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)}/>
        
      </fieldset>
    </div>
      <p className='text-red-600'>{error}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      <Link to={"/signup"}><button className='cursor-pointer px-5 hover:bg-green-400'>New User SignUp Here</button></Link>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Login