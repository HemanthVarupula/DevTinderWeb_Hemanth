import axios from 'axios'
import React, { useEffect } from 'react'
import BASE_URL from './utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from './utils/connectionSlice'
const Connection = () => {
    const connection=useSelector(store=>store.connection||[])
    console.log(connection)
    const dispatch=useDispatch();
    const fetchConnections=async()=>{
        try{
            const res=await axios.get(BASE_URL+"/user/connections",{withCredentials:true});
            console.log(res.data.data)
            dispatch(addConnections(res.data.data))
        }catch(err){
            console.log(err)
        }
    }
     useEffect(()=>{fetchConnections()},[])
     if(!connection) return;
     if(connection.length===0) return <h1>No connections Found</h1>
  return (
    <>
    <div className='flex justify-center text-2xl'>Connections</div>
    <div>{connection.map((data)=>{ 
        const {firstName,lastName,photoUrl,about,age,_id}=data;
        return (<div className='flex justify-center' key={_id}><div className=' bg-base-300 p-5 m-4  h-auto w-[300px]'>
            <img src={photoUrl} className='h-40 w-40 rounded-2xl'></img>
            <h2 className='font-bold text-xl'>{firstName+" "+lastName}</h2>
            <h3>Age {age}</h3>
            <h3>{about}</h3>
            </div>
        </div>)})}</div>
    </>
  )
}

export default Connection