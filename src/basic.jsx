import { useState, useEffect } from 'react';
import axios from 'axios';

function Basic() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleSubmit = () => {
    axios.post('http://localhost:3000/create', { name, age })
      .then(response => {
        console.log(response);
        setUsers(prevUsers => [...prevUsers, response.data]);
      })
      .catch(error => console.error('Error creating user:', error));
  };

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
          <h3>{user.age}</h3>
        </div>
      ))}
      <br />
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}

export default Basic;
