import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/AuthContext'

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    let {user} = useUserAuth()
    if(!user) {
        navigate('/')
    } 
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute