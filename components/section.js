const Section = ({ children, ...props }) => {
  return (
    <div className={"section " + props.className}>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Section
