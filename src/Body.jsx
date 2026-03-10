import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import BASE_URL from './utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './utils/userSlice'
import axios from "axios"
const Body = () => {
  const dispatch=useDispatch();
  const Navigate=useNavigate();
  const userData=useSelector(store=>store.user);
  const fetchUser=async()=>{
       if(userData) return;
    try{
      const user=await axios.get(BASE_URL+"/profile",{withCredentials:true});
      dispatch(addUser(user.data));
    }catch(err){
      // if(err.status===400){
      //   Navigate("/login");
      // }
      if(err.status===401){
        Navigate("/login")
      }
      console.log(err)
    }
  }
  useEffect(()=>{
      fetchUser();
  },[])
  return (
    <div>
        {/* <NavBar/> */}
        {/* <div className='flex  justify-center  gap-40'> */}
           {/* <Link to={"/login"}><button className='border-2 rounded-2xl bg-green-300 p-7 text-4xl cursor-pointer '>login</button></Link> */}
            {/* <Link to={"/signup"}><button className='border-2 rounded-2xl bg-red-500 p-7 text-4xl cursor-pointer '>Signup</button></Link> */}
        {/* </div> */}
        {/* <Outlet/> */}
        {/* <Footer  /> */}
         <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <div className='flex justify-center gap-40'>
        </div>
        <Outlet />
      </main>
      <Footer /> 
    </div>
    </div>
  )
}

export default Body