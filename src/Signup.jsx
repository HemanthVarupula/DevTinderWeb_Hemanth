import axios from 'axios'
import React, { useState } from 'react'
import BASE_URL from './utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [emailId,setEmailId]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [photoUrl,setPhotoUrl]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSignUp=async()=>{
        try{
            const res=await axios.post(BASE_URL+"/signup",{firstName,lastName,emailId,password,photoUrl},{withCredentials:true});
            dispatch(addUser(res.data.data));
            navigate("/profile")
        }catch(err){

        }
    }

  return (
    <>
    <div className='flex justify-center my-6'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-center text-xl" >SignUp</legend>

  <label className="label text-xl">FirstName</label> 
  <input type="email" className="input" placeholder="FirstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />

   <label className="label text-xl">LastName</label>
  <input type="email" className="input" placeholder="LastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} />


  <label className="label text-xl">Email</label>
  <input type="email" className="input" placeholder="Email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} />

  <label className="label text-xl">Password</label>
  <input type="password" className="input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />

   <label className="label text-xl">Photo Url</label>
  <input type="email" className="input" placeholder="PhotoUrl" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)}/>

  <button className="btn btn-neutral mt-4" onClick={handleSignUp}>SignUp</button>
</fieldset>
</div>
    </>
  )
}

export default Signup