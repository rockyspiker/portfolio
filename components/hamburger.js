const Hamburger = ({ isActive }) => (
  <span className={`hamburger ${isActive ? 'is-active' : ''}`}>
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </span>
)

export default Hamburger
