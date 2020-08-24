const PageHeading = ({ children }) => {
  return (
    <div className="page-heading">
      <div className="container">
        <div className="content">
          <h1>{children}</h1>
        </div>
      </div>
    </div>
  )
}

export default PageHeading
