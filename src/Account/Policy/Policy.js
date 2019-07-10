import React from 'react';
import styles from './Policy.module.css';

import logo from '../../images/wedeyy-white.svg';
import checkIcon from '../../images/checkmark-circle.svg';
import menuIcon from '../../images/menu.svg';

const Policy = () => (
  <div className={styles.Policy}>
    <header>
      <img src={logo} alt="logo" />
      <img src={menuIcon} alt="menu" />
    </header>
    <main>
      <div className={styles.intro}>
        <h1>Wedeyy Privacy Policy</h1>
        <p>We believe you should always know what data we collect from you and how we use it, and that you should have meaningful control over both. We want to empower you to make the best decisions about the information that you share with us.</p>
        <p>That’s the basic purpose of this Privacy Policy.</p>
      </div>
      <div className={styles.terms}>
        <div className={styles.top}>
          You should read this policy in full, but here are a few key things we hope you take away from it:
        </div>
        <div className={styles.bottom}>
          <div>
            <div>
              <img src={checkIcon} alt="" />
            </div>
            <p>Twitter is public and Tweets are immediately viewable and searchable by anyone around the world. We give you non-public ways to communicate on Twitter too, through protected Tweets and Direct Messages. You can also use Twitter under a pseudonym if you prefer not to use your name.</p>
          </div>
          <div>
            <div>
              <img src={checkIcon} alt="" />
            </div>
            <p>Twitter is public and Tweets are immediately viewable and searchable by anyone around the world. We give you non-public ways to communicate on Twitter too, through protected Tweets and Direct Messages. You can also use Twitter under a pseudonym if you prefer not to use your name.</p>
          </div>
          <div>
            <div>
              <img src={checkIcon} alt="" />
            </div>
            <p>Twitter is public and Tweets are immediately viewable and searchable by anyone around the world. We give you non-public ways to communicate on Twitter too, through protected Tweets and Direct Messages. You can also use Twitter under a pseudonym if you prefer not to use your name.</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <header>
          <div>
            <h1>WHAT YOU KEEP WITH US</h1>
            <figure>1</figure>
          </div>
        </header>
        <article>
          <p className={styles.section}>1.1</p>
          <h2>BASIC ACCOUNT INFORMATION</h2>
          <p>You don’t have to create an account to use some of our service features, such as searching and viewing public Twitter profiles or watching a broadcast on Periscope’s website. If you do choose to create an account, you must provide us with some personal data so that we can provide our services to you. On Twitter this includes a display name (for example, “Twitter Moments”), a username (for example, @TwitterMoments), a password, and an email address or phone number. Your display name and username are always public, but you can use either your real name or a pseudonym. You can also</p>
        </article>
      </div>
    </main>
  </div>
)

export default Policy;