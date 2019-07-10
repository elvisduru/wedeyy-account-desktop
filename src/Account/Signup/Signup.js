import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';

import chevronLeft from '../../images/chevron-left.svg';
import rightIcon from '../../images/backspace.svg';


export default class Signup extends Component {
  state = {
    fields: {
      username: "",
      password: "",
      confPassword: ""
    }
  }

  handleInputChange = (evt) => {
    const fields = Object.assign({}, this.state.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields })
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className={styles.Signup}>
        <div className={styles.Header}>
          <img src={chevronLeft} alt="back" onClick={this.goBack} />
          <h1>CREATE ACCOUNT</h1>
        </div>
        <form>
          <p>Join Wedeyy, the fastest growing family social network.</p>
          <input type="text" value={this.state.fields.username} name="username" onChange={this.handleInputChange} placeholder="Enter Phone number, username, or email" />
          <input type="password" autoComplete="new-password" value={this.state.fields.password} name="password" onChange={this.handleInputChange} placeholder="Enter Password" />
          <input type="password" autoComplete="new-password" value={this.state.fields.confPassword} name="confPassword" onChange={this.handleInputChange} placeholder="Confirm Password" />
          <Link to="/confirm">
            <img src={rightIcon} alt="" />
          </Link>
          <p className={styles.policy}>
            <Link to="/policy">By creating an account you agree to our Terms of Service and Privacy Policy.</Link>
          </p>
        </form>
        <div className={styles.footer}>
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    )
  }
}
