import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Hamburger from './icons/hamburger'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  useEffect(() => {
    const body = document.querySelector('body')
    activeMenu
      ? body.classList.add('has-active-header')
      : body.classList.remove('has-active-header')
  }, [activeMenu])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        document.querySelector('.header').classList.add('not-top')
      } else document.querySelector('.header').classList.remove('not-top')
    })
  })

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

        <Link href="/">
          <a className="link-logo">
            <img className="icon-logo" src="logo.jpg"></img>
          </a>
        </Link>

        <nav>
          <span className="category main-category">Navigation</span>
          <ul className="main-nav">
            <NavItem className="nav-item link-about" hrefs={['/']}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </NavItem>
            <NavItem className="nav-item link-contact" hrefs={['/contact']}>
              <Link href="/contact">
                <a>Contact</a>
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
