import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BASE_URL from './utils/constant'
import { useDispatch,useSelector } from 'react-redux'
import { addRequests, removeRequest } from './utils/requestSlice'

const Request = () => {
    const request=useSelector(store=>store.requests||[])
    console.log(request)
    const dispatch=useDispatch();
    const fetchRequest=async ()=>{
        try{
            const res=await axios.get(BASE_URL+"/user/requests/recived",{withCredentials:true});
            dispatch(addRequests(res.data.data))
        }catch(err){
            console.log(err)
        }
    }

    const reviewRequest=async(status,_id)=>{
        const res= axios.post(BASE_URL+"/request/review/"+status+"/"+_id,{},{withCredentials:true})
        dispatch(removeRequest(_id));
    }



    useEffect(()=>{fetchRequest()},[])
     if(!request) return;
     if(request.length===0) return <h1>No Request Found</h1>
     
  return (
    <>
    <div className='flex justify-center text-2xl'>Connection Requests</div>
    <div>{request.map((data)=>{ 
        const {firstName,lastName,photoUrl,about,age,_id}=data.fromUserId;
         console.log("request id is "+data._id)
        return (<div className='flex justify-center' key={_id}>
        <div  className=' bg-base-300 p-5 m-4  h-auto w-[300px]'>
            <img src={photoUrl} className='h-40 w-40 rounded-2xl'></img>
            <h2 className='font-bold text-xl'>{firstName+" "+lastName}</h2>
            <h3>Age {age}</h3>
            <h3>{about}</h3>
            <div><button className="btn btn-active btn-primary mx-2" onClick={()=>reviewRequest("rejected",data._id)}>Reject</button>
            <button className="btn btn-active btn-secondary mx-2" onClick={()=>reviewRequest("accepted",data._id)}>Accept</button>
            </div>
            </div>
        </div>
        )})}
        </div>
    </>
  )
}

export default Request