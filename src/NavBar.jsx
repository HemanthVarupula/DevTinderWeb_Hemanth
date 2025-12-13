import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BASE_URL from './utils/constant'
import { removeUser } from './utils/userSlice'
const NavBar = () => {
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user)
    console.log(user);
   const handleLogout= async()=>{
      try{
        const res= await axios.post(BASE_URL+"/logout",{},{withCredentials:true});
        dispatch(removeUser());
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
  return (
    <div>
              <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to={"/"} className="btn btn-ghost text-xl">DevTindetr</Link>
  </div>
  {user&& (<div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      <div className="dropdown dropdown-end mx-8">
      <div>welcome {user.firstName}</div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            src= {user.photoUrl} alt="user photo"/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to={"/profile"} className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to={"/connections"}>Connections</Link></li>
        <li><Link to={"/requests"}>Requests</Link></li>
        <li><Link to={"/login"} onClick={handleLogout}>Logout</Link></li>
      </ul>
    </div>
    </div>)}
</div>
    </div>
  )
}


export default NavBar