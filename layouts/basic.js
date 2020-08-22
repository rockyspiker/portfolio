import App from './base'
import Header from '../components/header'
import Hero from '../components/hero'

const Basic = (props) => {
  return (
    <App>
      <Header />
      <Hero></Hero>
      <div className="container" {...props}>
        {props.children}
      </div>
    </App>
  )
}

export default Basic
