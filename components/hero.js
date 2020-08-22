const Hero = ({ background, children, ...props }) => {
  return (
    <div className="hero" id="hero" {...props}>
      <div className="hero-content">
        {children}
      </div>
      <div className="hero-portrait">
        <img src="/portrait.jpeg"></img>
      </div>
    </div>
  )
}

export default Hero
