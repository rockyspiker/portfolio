import App from './base'
import Header from '../components/header'

const Basic = ({ children, heading, ...props }) => {
  return (
    <App>
      <Header />
      <div {...props}>
        {children}
      </div>
    </App>
  )
}

export default Basic
