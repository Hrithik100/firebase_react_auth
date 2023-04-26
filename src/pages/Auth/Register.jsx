import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Login.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
      toast(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.heading}>
          <h1>Register</h1>
        </div>
        <ToastContainer />
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.inputItem}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputItem}>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.submitbtn} type="submit">Register</button>
        </form>
        <div className={styles.account}>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
