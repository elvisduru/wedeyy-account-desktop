import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

import logo from '../../images/wedeyy.svg';
import rightIcon from '../../images/backspace.svg';

class Login extends Component {
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
      <div className={styles.Login}>
        <div className={styles.wrapper}>
          <form autoComplete="off">
            <img src={logo} alt="logo" />
            <div>
              <div className={styles.header}>
                <div />
                <h1>Log in</h1>
                <div />
              </div>
              <input type="text" value={this.state.fields.username} name="username" onChange={this.handleInputChange} placeholder="Enter Phone number, Username, or Email" />
              <input type="password" autoComplete="new-password" value={this.state.fields.password} name="password" onChange={this.handleInputChange} placeholder="Enter Password" />
              <button>
                <img src={rightIcon} alt="" />
              </button>
              <Link to="/forgot">Forgot password?</Link>
            </div>
          </form>
          <div className={styles.footer}>
            <p>Don't have account yet? <Link to="/signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
