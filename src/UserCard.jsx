import axios from 'axios';
import React from 'react'
import BASE_URL from './utils/constant';
import { useDispatch } from 'react-redux';
import { addRequests } from './utils/requestSlice';
import { removeFeed } from './utils/feedSlice';

const UserCard = ({user}) => {
    const dispatch=useDispatch();
    console.log(user)
    const {firstName,lastName,photoUrl,age,about,gender,_id}=user;
    console.log("the id of user is "+_id)
    const handleSendRequest=async(status,userId)=>{
      try{
        const res=await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,{},{withCredentials:true});
        console.log("the result is "+res)
        dispatch(removeFeed(userId))
        dispatch(addRequests(res.data.data))
      }catch(err){
        console.log("api call didnt make ")
      }
    }
    
  return (
    <div className="card bg-base-300 w-96 shadow-sm rounded-2xl">
  <figure>
    <img className='my-6 rounded-2xl'
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    {age&&gender&&<p>{age+" "+gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center my-4 mx-3 p-4">
      <button className="btn bg-green-400 " onClick={()=>handleSendRequest("interested",_id)}>send request</button>
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
    </div>
  </div>
</div>
  )
}

export default UserCard