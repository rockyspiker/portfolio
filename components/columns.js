const Columns = ({children, className, ...props}) => {
  return (
    <div className={`columns ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Columns
