import Chevrons from './icons/chevrons'

const Hero = ({ background, children, ...props }) => {
  return (
    <div className="hero" id="hero" {...props}>
      <div className="container">
        <div className="hero-content">{children}</div>
        <a href="#arrow">
          <Chevrons id="arrow" />
        </a>
      </div>
    </div>
  )
}

export default Hero
