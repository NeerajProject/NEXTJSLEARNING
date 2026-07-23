interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {next:{revalidate: 60}}); // Revalidate every 60 seconds
  
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const users: User[] = await res.json();

  return (
    <div>
      <h1>Users</h1>
<p>{new Date().toLocaleString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;