const Section = ({ children, ...props }) => {
  return (
    <div className="section">
      <div className="container" {...props}>
        {children}
      </div>
    </div>
  )
}

export default Section
