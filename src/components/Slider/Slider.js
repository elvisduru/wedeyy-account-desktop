import React, { Component } from 'react';
import styles from './Slider.module.css';
import callingImg from '../../images/calling.svg';
import collabImg from '../../images/collab.svg';
import connectedImg from '../../images/connected.svg';
import groupChatImg from '../../images/group_chat.svg';
import postOnlineImg from '../../images/post_online.svg';
import statusUpdateImg from '../../images/status_update.svg';
import takingSelfieImg from '../../images/taking_selfie.svg';
import teamChatImg from '../../images/team_chat.svg';
import textingImg from '../../images/texting.svg';
import videoCallImg from '../../images/video_call.svg';
import workChatImg from '../../images/work_chat.svg';

export default class Slider extends Component {

  state = {
    images: [
      groupChatImg,
      takingSelfieImg,
      callingImg,
      collabImg,
      connectedImg,
      postOnlineImg,
      statusUpdateImg,
      teamChatImg,
      textingImg,
      videoCallImg,
      workChatImg
    ]
  }

  handleSliderChange = () => {
    let image = this.refs.image;
    let start = 1;

    setInterval(() => {
      if (start === this.state.images.length - 1) {
        start = 0;
      }
      image.classList.remove(styles.fadeIn);
      var changeImage = setTimeout(() => {
        image.src = this.state.images[start++];
      }, 700)
      setTimeout(() => {
        clearTimeout(changeImage);
        image.classList.add(styles.fadeIn);
      }, 1000)
    }, 8000)

  }

  componentDidMount() {
    this.handleSliderChange();
  }

  render() {
    return (
      <div className={styles.Slider}>
        <img className={styles.fadeIn} ref="image" src={groupChatImg} alt=""/>
      </div>
    )
  }
}
