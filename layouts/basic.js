import App from './base'
import Footer from '../components/footer'
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
      <Footer />
    </App>
  )
}

export default Basic
