import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BASE_URL from './utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from './utils/feedSlice'
import UserCard from './UserCard'
const Feed = () => {
  const feed=useSelector(store=>store.feed)
  const dispatch=useDispatch();
  // const [data,setData]=useState("");
  const getFeed=async()=>{
    if(feed) return ;
    const userData=await axios.get(BASE_URL+"/feed",{withCredentials:true});
    dispatch(addFeed(userData.data))
    // setData(userData)
  }
  useEffect(()=>{getFeed()},[])
  if(!feed) return;
  if(feed.length===0) return <h1>No User Left , Try again after some Time </h1>
  return feed && (
    
      <div className='flex justify-center my-10'>
        <UserCard user={feed[0]}/>
      </div>
  )
}

export default Feed