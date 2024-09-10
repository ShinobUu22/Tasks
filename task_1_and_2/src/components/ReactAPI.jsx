import { useState, useEffect } from "react";

const ReactAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching user data:", err);
        setLoading(false);
      }
    };
    fetchAPI();
  }, []);

  if (loading) return <div className="text-blue-200 ">Fetching Data.....</div>;

  return (
    <section className="text-blue-100 flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl text-center">Task 2: User List from API</h1>
      <div className="my-5">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ReactAPI;
