import Link from 'next/link'
import LinkedIn from './icons/linked-in'
import Github from './icons/github'
import Logo from './icons/logo-rocky'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content-media">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className="media-btns">
            <Link href="https://www.linkedin.com/in/rocky-spiker-9120a1198/">
              <a target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </a>
            </Link>
            <Link href="https://github.com/rockyspiker">
              <a target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </Link>
          </div>
        </div>
        <div className="footer-content">
          <ul className="footer-content-links">
            <li>
              <p>Main</p>
            </li>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/my-work">
                <a>My Work</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Me</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <ul className="footer-content-resources">
            <li>
              <p>Resources</p>
            </li>
            <li>
              <Link href="/resume.pdf">
                <a target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
