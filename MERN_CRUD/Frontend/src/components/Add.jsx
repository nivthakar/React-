import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/users", user);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New User</h2>
      <input 
        type="text"
        name="name" 
        placeholder="Enter Full Name" 
        onChange={handleChange}
        required 
      />
      <input 
        type="email"
        name="email" 
        placeholder="Enter Email Address" 
        onChange={handleChange}
        required 
      />
      <input 
        type="password"
        name="password" 
        placeholder="Enter Password" 
        onChange={handleChange}
        required 
      />
      <button type="submit" className="btn-success">Add User</button>
    </form>
  );
}

export default Add;