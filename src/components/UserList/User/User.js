import React from 'react';
import { Link } from 'react-router-dom';
import styles from './User.module.css';

const User = ({ avatar, username, fullname }) => (
  <div className={styles.User}>
    <Link to="/openaccount">open</Link>
    <img src={avatar} alt="avatar" />
    <div>
      <h3>{fullname}</h3>
      <p>{username}</p>
    </div>
  </div>
)

export default User;
