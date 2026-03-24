import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function View() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="view-container">
      <h2>👥 User Management</h2>
      <Link to="/add" className="add-user-btn">+ Add New User</Link>
      
      {users.length === 0 ? (
        <div className="empty-message">
          <p>No users found yet.</p>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>Click "Add New User" to get started.</p>
        </div>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td data-label="Name">
                  <strong>{u.name}</strong>
                </td>
                <td data-label="Email">
                  {u.email}
                </td>
                <td data-label="Actions">
                  <div className="table-actions">
                    <Link 
                      to={`/update/${u._id}`} 
                      className="edit-link"
                    >
                      ✏️ Edit
                    </Link>
                    <button 
                      className="btn-danger"
                      onClick={() => deleteUser(u._id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default View;