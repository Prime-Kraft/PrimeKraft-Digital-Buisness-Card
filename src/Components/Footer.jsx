import twitterIcon from '../assets/Twitter Icon.png'

import githubIcon from '../assets/GitHub-Icon.png'

export default function Footer() {
  return (
    <>
      <footer className='footer-panel'>

          <div className='icon-box'>
            <a href='https://x.com/fusionCode91'><img src={twitterIcon} className='icon-footer' alt="image  of twitter icon"
            /></a>
          </div>
          <div className='icon-box'>
          <a href='https://github.com/Prime-Kraft'>
            <img src={githubIcon} className='icon-footer' alt="image of Github icon"
            /></a>
          </div>

      </footer>
    </>
  )
}
