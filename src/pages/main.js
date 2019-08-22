import React, { useState } from 'react';
import Card from '../components/card';

function Main() {
  const [users, setUsers] = useState([]);
  const [messageError, setMessageError] = useState('');

  fetch('http://demo8739373.mockable.io/')
    .then(response => {
      if (response.status !== 200) {
        setMessageError('Ocorreu um erro, tente novamente mais tarde');
        return;
      }
      response.json().then(data => setUsers(data.users));
    })
    .catch(error => {
      if (error) {
        setMessageError('Ocorreu um erro, tente novamente mais tarde');
      }
    });

  return (
    <>
      <div className="row space-between text-center">
        <div className="column-full">
          <h1>Listagem de usuários</h1>
        </div>
      </div>

      <div className="row">
        <div className="column-full text-center">
          <p className="messageError">{messageError}</p>
        </div>
        {users.map(user => (
          <div className="column-card" key={user.email}>
            <Card
              key={user.email}
              avatar={user.photo}
              name={user.name}
              email={user.email}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
