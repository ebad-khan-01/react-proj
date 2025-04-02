import React from 'react';
import './index.css';

function List({ people }) {
  return (
    <div className="list-container">
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="person-card" key={id}>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{age} years old</p>
          </div>
        );
      })}
    </div>
  );
}

export default List;
