import { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

// src/components/UserList.js
  useEffect(() => {
    const url = 'https://borras25.netlify.app/.netlify/functions/getData'; // Asegúrate de que esta URL sea correcta

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.id_usuario}>
            {user.usuario} - {user.passw} - {user.fk_servicio_contratado} - {user.fk_tipo_usuario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
