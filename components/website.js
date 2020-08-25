import Link from 'next/link'
import Button from './button'

const Website = ({ children, className, href, left, title, ...props }) => {
  if (left) {
    return (
      <div className={`website ${className}`}>
        <div className="container">
          <Link href={href}>
            <a target="_blank">
              <div className="website-thumb web-col">
                <Button isPrimary href={href} target="blank">
                  {title}
                </Button>
              </div>
            </a>
          </Link>
          <div className="website-description web-col">{children}</div>
        </div>
      </div>
    )
  } else
    return (
      <div className={`website ${className}`}>
        <div className="container">
          <div className="website-description web-col">{children}</div>
          <Link href={href}>
            <a target="_blank">
              <div className="website-thumb web-col">
                <Button isPrimary href={href} target="blank">
                  {title}
                </Button>
              </div>
            </a>
          </Link>
        </div>
      </div>
    )
}

export default Website
