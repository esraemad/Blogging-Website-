import React from 'react';


const UserItem = props => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={props.image} alt={props.name}  style={{borderRadius:'50%'}}/>
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
