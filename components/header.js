import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from './button'
import Hamburger from './hamburger'
import Chevron from './icons/chevron'
import Logo from './icons/logo-extras'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  useEffect(() => {
    const body = document.querySelector('body')
    activeMenu
      ? body.classList.add('has-active-header')
      : body.classList.remove('has-active-header')
  }, [activeMenu])

  return (
    <div className={`header ${activeMenu ? 'is-active' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => {
            setActiveMenu(!activeMenu)
          }}
        >
          <Hamburger isActive={activeMenu} />
        </button>

        <nav>
          <span className="category main-category">Main</span>
          <ul className="main-nav">
            <NavItem className="nav-item link-home" hrefs={['/']}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </NavItem>
            <NavItem
              className="nav-item link-get-started"
              hrefs={['/get-started']}
            >
              <Link href="/get-started">
                <a>Get Started</a>
              </Link>
            </NavItem>
            <NavItem
              className="nav-item link-resources"
              hrefs={['/policies', '/photo-policy', '/studios']}
            >
              <span className="category resources-category">
                Resources
                <Chevron />
              </span>
              <ul className="sub-nav">
                <li>
                  <Link href="/policies">
                    <a>Policies and Procedures</a>
                  </Link>
                </li>
                <li>
                  <Link href="/photo-policy">
                    <a>Photo Updates</a>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/CC-payment-auth-Rev2020April.pdf">
                    <a target="_blank" rel="noopener noreferrer">
                      Electronic Payment Authorization
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/studios">
                    <a>Studios</a>
                  </Link>
                </li>
              </ul>
            </NavItem>
            <NavItem className="nav-item link-contact" hrefs={['/contact']}>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </NavItem>
            <li className="link-login">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li className="login-button">
              <Button href="#">Login</Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

const NavItem = ({ children, className, hrefs, ...props }) => {
  const router = useRouter()
  let classes = className || ''

  hrefs.forEach((href) => {
    if (router.pathname === href) {
      classes = `${classes} active`
    }
  })

  return (
    <li className={classes} {...props}>
      {children}
    </li>
  )
}

export default Header
