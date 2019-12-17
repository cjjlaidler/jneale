import React from "react";
import tumblrIcon from './tumblr.png'
import soundcloudIcon from './soundcloud.png'
import linkedinIcon from './linkedin.png'
import instagramIcon from './instagram.png'
import styles from "./more.module.css"

export default () => (
    <div>
        <h3>Find out more on my social media pages</h3>
            <div className={styles.socialContainer}>
            <a className={styles.socialIcon}href="http://joelneale.tumblr.com/"><img className={styles.socialIcon} src={tumblrIcon} /></a>
            <a className={styles.socialIcon} href="https://soundcloud.com/joel-neale"><img className={styles.socialIcon} src={soundcloudIcon} /></a>
            <a className={styles.socialIcon} href="https://www.instagram.com/joelveneale/"><img className={styles.socialIcon} src={instagramIcon} /></a>
            <a className={styles.socialIcon} href="https://uk.linkedin.com/in/joel-neale-215a8048"><img className={styles.socialIcon} src={linkedinIcon} /></a>
            </div>
    </div>
)