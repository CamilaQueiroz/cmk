import React from 'react';

function Card({ avatar, name, email }) {
  return (
    <div className="card">
      <header className="card-avatar">
        <img alt="avatar" src={avatar} />
      </header>
      <div className="card-info">
        <p>{name}</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </div>
  );
}

export default Card;
