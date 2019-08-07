import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Reset.module.css';

export default class Reset extends Component {
  state = {
    fields: {
      password: "",
      confPassword: ""
    },
    showCompleted: false
  }

  handleInputChange = (evt) => {
    const fields = Object.assign({}, this.state.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields })
  }

  handleCompleted = () => {
    this.setState(prevState => ({ showCompleted: !prevState.showCompleted }))
  }

  render() {
    let resetCompleted = this.state.showCompleted ? (
      <div className={styles.completed}>
        <h1>Password reset successfully</h1>
        <p>Password reset completed</p>
        <Link to="/login">Login</Link>
      </div>
    ) : null;

    return (
      <div className={styles.Reset}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1>Reset Password</h1>
            <input type="password" autoComplete="new-password" value={this.state.fields.password} name="password" onChange={this.handleInputChange} placeholder="Enter Password" />
            <input type="password" autoComplete="new-password" value={this.state.fields.confPassword} name="confPassword" onChange={this.handleInputChange} placeholder="Confirm Password" />
            <button onClick={this.handleCompleted}>Reset</button>
          </div>
          {resetCompleted}
        </div>
      </div>
    )
  }
}
