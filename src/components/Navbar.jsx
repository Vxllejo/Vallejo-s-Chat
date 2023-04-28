import React from 'react'
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const {currentUser, logout} =  UserAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="navbar bg-base-100 z-10 fixed">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Vallejo's Chat</a>
    <div className="dropdown dropdown-start">
  <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-info">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </label>
  <div tabIndex={0} className="card compact dropdown-content shadow bg-base-200 rounded-box w-64">
    <div className="card-body">
      <h2 className="card-title">Created By VallejoDev</h2> 
      <p>Here my chat!</p>
    </div>
  </div>
</div>
  </div>
  <div className="flex-none">
  {currentUser ? <button onClick={handleLogout} className='btn btn-accent'>Logout</button> : "" }
  </div>
</div>
  )
  
}

export default Navbar