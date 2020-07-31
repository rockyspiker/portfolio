import Link from 'next/link'
import classnames from 'classnames'

const Button = ({
  className,
  children,
  href,
  isPrimary,
  isLight,
  isLarge,
  isWide,
  onClick,
  target,
  type,
  ...props
}) => {
  const attributes = {}

  attributes.className = classnames(
    {
      button: true,
      'is-primary': isPrimary,
      'is-light': isLight,
      'is-large': isLarge,
      'is-wide': isWide,
    },
    className
  )

  attributes.onClick = onClick
  attributes.target = target || '_self'

  if (target === '_blank') {
    attributes.rel = 'noopener noreferrer'
  }

  // standard button
  if (typeof href === 'undefined') {
    return (
      <button type="button" {...attributes} {...props}>
        {children}
      </button>
    )
  }

  // standard link
  if (href.startsWith('http') || href.startsWith('#')) {
    return (
      <a href={href} {...attributes} {...props}>
        {children}
      </a>
    )
  }

  // nextjs link
  return (
    <Link href={href}>
      <a {...attributes} {...props}>
        {children}
      </a>
    </Link>
  )
}

export default Button
