import App from './base'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'

const Basic = (props) => {
  return (
    <App>
      <Header />
      <Hero>
        <h1>Rocky Spiker</h1>
        <h3>
          Planner, <span className="accent">Developer</span>, Team-Player
        </h3>
      </Hero>
      <div className="container" id="main" {...props}>
        {props.children}
      </div>
      <Footer />
    </App>
  )
}

export default Basic
