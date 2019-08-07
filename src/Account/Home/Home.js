import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import logo from '../../images/wedeyy.svg';

export default class Home extends Component {
  state = {
    fields: {
      username: "",
      password: ""
    }
  }

  handleInputChange = (evt) => {
    const fields = Object.assign({}, this.state.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields })
  }
  render() {
    return (
      <div className={styles.Home}>
        <div className={styles.top}>
          <input type="text" value={this.state.fields.username} name="username" onChange={this.handleInputChange} placeholder="Phone number, Username, or Email" />
          <input type="password" autoComplete="new-password" value={this.state.fields.password} name="password" onChange={this.handleInputChange} placeholder="Password" />
          <button className={styles.login}>
            Log in
          </button>
        </div>
        <div className={styles.bottom}>
          <img src={logo} alt=""/>
          <h1>The fastest growing family social network.</h1>
          <h3>Join Wedeyy today.</h3>
          <Link to="/signup">Sign up</Link>
          <Link to="/login" className={styles.login}>Log in</Link>
        </div>
      </div>
    )
  }
}
