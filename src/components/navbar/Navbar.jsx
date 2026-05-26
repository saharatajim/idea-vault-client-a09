"use client"
import React, { useState } from 'react';
import { ModeToggle } from '../ui/ModeToggle';
import { SignInDropdown } from './SignInDropdown';
import MynavLink from './MynavLink';

const Navbar = () => {

 let [user,setUser]=useState(false)  //will removed

 const items=[
    {
        text:"Home",
        path:"/"
    },
    {
        text:"Ideas",
        path:"/ideas"
    },
    {
        text:"Add idea",
        path:"/add-idea"
    },
    {
        text:"My ideas",
        path:"/my-ideas"
    },
    {
        text:"My interactions",
        path:"/my-interactions"
    },
 ]
 const signoutItems=[
    {
        text:"Home",
        path:"/"
    },
    {
        text:"Ideas",
        path:"/ideas"
    }]

    return (
<div className='container mx-auto   bg-gray-900 top-0 sticky  z-50'>
    <div className="navbar  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
     { user==false ?
        <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
       signoutItems.map((item,index)=> <MynavLink key={index} href={item.path}>{item.text}</MynavLink>)}
      </ul>
      :
       <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">{
       items.map((item,index)=> <MynavLink key={index} href={item.path}>{item.text}</MynavLink>)}
      </ul>
      }
    </div>
   <div className='<div className="text-2xl bg-linear-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
     <span className='font-extrabold text-2xl'> Idea Vault</span>
   </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
      { user==false ?
        <ul
        tabIndex="-1"
        className="menu menu-horizontal text-[18px] space-x-6 font-medium px-1">
        {
       signoutItems.map((item,index)=> <MynavLink key={index} href={item.path}>{item.text}</MynavLink>)}
      </ul>
      :
       <ul
        tabIndex="-1"
        className="menu menu-horizontal text-[18px] px-1 font-medium space-x-6">
     {
       items.map((item,index)=> <MynavLink key={index} href={item.path}>{item.text}</MynavLink>)}
      </ul>
      }
  </div>
  <div className="navbar-end">
   <ModeToggle/>
{  user==false ?
    <div>
      <a onClick={()=>setUser(!user)} className="btn rounded-2xl text-white bg-linear-to-r from-cyan-400 via-blue-400 to-blue-600 border-0 scale-95">Sign In</a>
    
  </div>
  :<SignInDropdown setUser={setUser} user={user}/>
  }
  </div>
   
</div>
</div>
    );
};

export default Navbar;