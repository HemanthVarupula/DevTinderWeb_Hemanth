import React from "react";
import ReactDom from "react-dom/client";
import NavBar from "./NavBar";
import Body from "./Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Footer from "./Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Feed";
import Connection from "./Connection";
import Request from "./Request";
import Signup from "./Signup";
const App=()=>{
  return(
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/" >
      <Routes>
      <Route path="/" element={<Body/>}>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/" element={<Feed/>}></Route>
         <Route path="/connections" element={<Connection/>}/>
            <Route path="/requests" element={<Request/>}/>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          {/* <Route path="/footer" element={<Footer/>}></Route> */}
      </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App;