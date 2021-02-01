const Hero = ({ background, children, ...props }) => {
  return (
    <div className="hero" id="hero" {...props}>
      <div className="container">
        <div className="hero-content">{children}</div>
      </div>
    </div>
  )
}

export default Hero
