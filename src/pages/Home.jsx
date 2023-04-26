import React from 'react'
import { useUserAuth } from '../context/AuthContext'

const Home = () => {
  const {user} = useUserAuth()
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{fontFamily:"Poppins"}}>Welcome {user?.email}</h1>
    </div>
  )
}

export default Home