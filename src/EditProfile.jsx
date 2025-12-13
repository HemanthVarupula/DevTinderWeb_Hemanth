import React, { useState } from 'react'
import UserCard from './UserCard';
import BASE_URL from './utils/constant';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';
import axios from 'axios';
const editProfile = ({user}) => {
    const [toast,setToast]=useState(false)
    const [firstName,setFirstName]=useState(user.firstName);
    const [lastName,setLastName]=useState(user.lastName);
    const [age,setAge]=useState(user.age||"");
    const [gender,setGender]=useState(user.gender||"");
    const [about,setAbout]=useState(user.about);
    const [photoUrl,setPhotoUrl]=useState(user.photoUrl);
    const dispatch=useDispatch();
    const saveprofile=async()=>{
        try{
            const res= await axios.patch(BASE_URL+"/profile/edit",{firstName,lastName,age,gender,photoUrl,about},{withCredentials:true});
            console.log(res.data)
            dispatch(addUser(res.data))
            setToast(true)
            const i=setInterval(()=>{
              setToast(false)
            },3000)
        }catch(err){
            console.log("hello"+err.message)
        }
    }
  return (
    <>
    <div className='flex gap-10 justify-center'>
    <div className='flex justify-center'>
        <fieldset className="fieldset bg-base-400 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend text-center">Update Profile</legend>

  <label className="label">FirstName</label>
  <input type="text" className="input" placeholder="FirstName" value={firstName} onChange={(e)=>{return setFirstName(e.target.value)}}/>

   <label className="label">LastName</label>
   <input type="text" className="input" placeholder="lastName" value={lastName} onChange={(e)=>{return setLastName(e.target.value)}}/>

    <label className="label">age</label>
    <input type="text" className="input" placeholder="age" value={age} onChange={(e)=>{return setAge(e.target.value)}} />

     <label className="label">About</label>
     <textarea  type="text" className="input textarea h-26" placeholder="About" value={about} onChange={(e)=>{return setAbout(e.target.value)}} />

     <label className="label">Gender</label>
     <input type="text" className="input" placeholder="gender" value={gender} onChange={(e)=>{return setGender(e.target.value)}} />

     <label className="label">photoUrl</label>
     <input type="text" className="input" placeholder="PhotoUrl" value={photoUrl} onChange={(e)=>{return setPhotoUrl(e.target.value)}} />
     


  <button className="btn btn-neutral mt-4" onClick={saveprofile}  >Save </button>
</fieldset>
    </div>

    <div>
    <UserCard user={{firstName,lastName,age,gender,about,photoUrl}}/>
    </div>
    </div>
    <div className="toast toast-top toast-center">
  {toast&&<div className="alert alert-success ">
    <span>Profile saved successfully.</span>
  </div>}
</div>
    </>
  )
}

export default editProfile