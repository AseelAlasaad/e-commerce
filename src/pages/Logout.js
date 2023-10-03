import React,{useContext} from 'react'
import Login from './Login'
import { authContext } from '../context/auth'
function Logout() {
  const {loggedIn}=useContext(authContext)
  return (
    <div>
      {!loggedIn &&<Login/>}
    </div>
  )
}

export default Logout
