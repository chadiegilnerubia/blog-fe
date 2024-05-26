import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  email: string;
  password: string; // Empty string for now, replace with actual password if needed
  firstName: string;
  lastName: string;
}

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://54.169.112.27:3000/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
