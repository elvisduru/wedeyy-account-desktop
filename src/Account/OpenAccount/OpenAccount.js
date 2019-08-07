import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './OpenAccount.module.css';

import backIcon from "../../images/chevron-left.svg";

export default class OpenAccount extends Component {
  state = {
    avatar: "https://i.pravatar.cc/300",
    fullname: "James Falana"
  }
  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className={styles.OpenAccount}>
        <div className={styles.wrapper}>
          <header>
            <img src={backIcon} alt="" onClick={this.goBack} />
          </header>
          <main>
            <h1>Find your Wedeyy account</h1>
            <img src={this.state.avatar} alt="" />
            <h2>{this.state.fullname}</h2>
            <Link to="/login">Send recovery link</Link>
          </main>
        </div>
      </div>
    )
  }
}
