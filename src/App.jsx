import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/user/Dashboard'
import ProtectedRoute from './components/protectedroute/ProtectedRoute'


function App() {
   

  return (
    <>
     <Header/> 
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
    </>
  )
}

export default App
