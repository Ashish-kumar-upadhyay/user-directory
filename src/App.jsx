import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2 className="center">Loading...</h2>;
  }

  if (error) {
    return <h2 className="center error">{error}</h2>;
  }

  return (
    <div className="container">
      <h1>User Directory</h1>

      <div className="grid">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;