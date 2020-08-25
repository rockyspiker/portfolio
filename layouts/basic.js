import App from './base'
import Footer from '../components/footer'
import Header from '../components/header'
import PageHeading from '../components/page-heading'

const Basic = ({ children, Heading, ...props }) => {
  return (
    <App>
      <Header />
      <PageHeading>{Heading}</PageHeading>
      <div {...props}>
        {children}
      </div>
      <Footer />
    </App>
  )
}

export default Basic
