import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from './button'
import Hamburger from './hamburger'
import Chevron from './icons/chevron'

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
                <a>My Work</a>
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
                  <Link href="/resume.pdf">
                    <a target="_blank" rel="noopener noreferrer">
                      Resume
                    </a>
                  </Link>
                </li>
              </ul>
            </NavItem>
            <NavItem className="nav-item link-contact" hrefs={['/contact']}>
              <Link href="/contact">
                <a>Contact Me</a>
              </Link>
            </NavItem>
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
