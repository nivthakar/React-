import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(res => {
        const found = res.data.find(u => u._id === id);
        setUser(found);
      });
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/users/${id}`, user);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update User Information</h2>
      <input 
        type="text"
        name="name" 
        value={user.name || ""} 
        onChange={handleChange}
        placeholder="Enter Full Name"
        required 
      />
      <input 
        type="email"
        name="email" 
        value={user.email || ""} 
        onChange={handleChange}
        placeholder="Enter Email Address"
        required 
      />
      <input 
        type="password"
        name="password" 
        value={user.password || ""} 
        onChange={handleChange}
        placeholder="Enter Password"
        required 
      />
      <button type="submit" className="btn-success">Update User</button>
    </form>
  );
}

export default Update;