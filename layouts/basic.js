import App from './base'
import Header from '../components/header'

const Basic = (props) => {
  return (
    <App>
      <Header />
      <div className="container" {...props}>
        {props.children}
      </div>
    </App>
  )
}

export default Basic
