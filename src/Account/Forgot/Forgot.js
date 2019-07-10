import React, { Component } from 'react';
import styles from './Forgot.module.css';

import backIcon from "../../images/chevron-left.svg";
import searchIcon from "../../images/magnifier.svg";
import UserList from '../../components/UserList/UserList';


export default class Forgot extends Component {
  state = {
    username: "",
    openFoundUsers: false,
    foundUsers: [
      { avatar: "https://i.pravatar.cc/100", username: "jamesfalana", fullname: "James Falana" },
      { avatar: "https://i.pravatar.cc/101", username: "yemifalana", fullname: "Yemi Falana" },
      { avatar: "https://i.pravatar.cc/102", username: "layifalana", fullname: "Olayiwola Falana" },
    ]
  }

  handleInputChange = (evt) => {
    this.setState({ username: evt.target.value })
  }

  goBack = () => {
    this.props.history.goBack();
  }

  handleFoundUsers = () => {
    this.setState(prevState => ({ openFoundUsers: !prevState.openFoundUsers }))
  }

  render() {
    let foundUsers = this.state.openFoundUsers ? (
      <div className={styles.foundUsers}>
        <UserList users={this.state.foundUsers} />
      </div>
    ) : null;
    return (
      <div className={styles.Forgot}>
        <header>
          <img src={backIcon} alt="" onClick={this.goBack} />
        </header>
        <main>
          <h1>Find your Wedeyy account</h1>
          <p>Enter Phone number, username, or email</p>
          <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange} placeholder="Enter Phone number, username, or email" />
          <button onClick={this.handleFoundUsers}><img src={searchIcon} alt="search" /></button>
        </main>
        {foundUsers}
      </div>
    )
  }
}
