import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const {user, logOut} = useUserAuth()

  const handleLogout = async() =>{
    try {
      await logOut()
    } catch (error) {
      console.log(error.message)
      toast(error.message)
    }
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Hrithik</h1>
      </div>
      <ToastContainer/>
      <div>
        <ul className={styles.links}>
        <li>
            <NavLink to="/" className={styles.linkItem}>Home</NavLink>
          </li>
          {!user ? (<>
            <li>
            <NavLink to="/login" className={styles.linkItem}>Login</NavLink>
          </li>
          <li>
            <NavLink to="/register" className={styles.linkItem}>Sign up</NavLink>
          </li>
          </>) : (<>
            <li>
          <NavLink to="/login" onClick={handleLogout} className={styles.linkItem}>Logout</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={styles.linkItem}>Dashboard</NavLink>
          </li>
          </>)}
        </ul>
      </div>
    </header>
  );
};

export default Header;
