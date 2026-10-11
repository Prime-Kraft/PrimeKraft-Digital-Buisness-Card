
import profilePic from '../assets/profile-small.png'

import emailIcon from '../assets/Icon.png'
import twitterIcon from '../assets/Twitter Icon.png'

export default function Info() {

  return (
    <header className="header">
      <div className="profile-img-container">
        <img src={profilePic} alt="profile of Emmanuel B" className="profile-img" />
      </div>
        <h1> Emmanuel Bienose</h1>
        <h3> Frontend Software Engineer</h3>
        <p>github.com/Prime-Kraft</p>
        <div className="contacts-box">

        <button className="btn email-btn" onClick={() => window.location.href='mailto:fusiontechdev.rtid@gmail.com'}>

            <img src={emailIcon} className="icon" alt="image of email icon" />
          Email
          </button>

          <button className="btn linkedin-btn" onClick={() => window.location.href='https://x.com/fusionCode91'}>
            <img src={twitterIcon} className="icon" alt="image of Twitter icon" />
            Twitter
          </button>
      </div>
    </header>
    )

}
