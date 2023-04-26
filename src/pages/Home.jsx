import React from 'react'
import { useUserAuth } from '../context/AuthContext'

const Home = () => {
  const {user} = useUserAuth()
  return (
    <div style={{textAlign:"center", marginTop:20}}>
        <h1 style={{fontFamily:"Poppins"}}>Welcome {!user ? "guest" : `${user.email}`}</h1>
    </div>
  )
}

export default Home