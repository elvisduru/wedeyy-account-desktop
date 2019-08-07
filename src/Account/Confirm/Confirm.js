import React, { Component } from 'react';
import styles from './Confirm.module.css';

import chevronLeft from '../../images/chevron-left.svg';


export default class Confirm extends Component {
  state = {
    pin: {
      one: "",
      two: "",
      three: "",
      four: ""
    }
  }

  goBack = () => {
    this.props.history.goBack();
  }

  handleInputChange = (evt) => {
    evt.target.value = evt.nativeEvent.data;
    if (evt.target.value.length > 1) {
      return;
    }
    const pin = Object.assign({}, this.state.pin);
    pin[evt.target.name] = evt.target.value;
    this.setState({ pin })
    this.handleNextPin(evt)
  }


  handleNextPin = (evt) => {
    if (evt.target.name === "four") {
      return
    }
    evt.target.nextSibling.focus()
  }

  handleValidatePin = () => {
    let correctPin = 1234;
    let inputs = [...this.refs.pin.children]
    let typedPin = Number(inputs.map(key => key.value).join(""))
    if (typedPin === correctPin) {
      this.props.history.push('/reset')
    } else {
      inputs.forEach(item => {
        console.log(item)
        item.classList.add(styles.wrong)
      })
      this.refs.errText.classList.add(styles.show)
    }
  }

  render() {
    return (
      <div className={styles.Confirm}>
        <div className={styles.wrapper}>
          <div className={styles.Header}>
            <img src={chevronLeft} alt="back" onClick={this.goBack} />
            <h1>CREATE ACCOUNT</h1>
          </div>
          <div className={styles.content}>
            <h2>Account Confirmation</h2>
            <p>Please check your email and enter account activation code below.</p>
            <div className={styles.pin} ref="pin">
              <input type="number" onChange={this.handleInputChange} onKeyPress={this.handleNextPin} value={this.state.pin.one} name="one" />
              <input type="number" onChange={this.handleInputChange} onKeyPress={this.handleNextPin} value={this.state.pin.two} name="two" />
              <input type="number" onChange={this.handleInputChange} onKeyPress={this.handleNextPin} value={this.state.pin.three} name="three" />
              <input type="number" onChange={this.handleInputChange} onKeyPress={this.handleNextPin} value={this.state.pin.four} name="four" />
            </div>
            <p className={styles.error} ref="errText">Incorrect activation code!!!</p>
            <div className={styles.buttons}>
              <button>Resend</button>
              <button onClick={this.handleValidatePin}>Activate</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
