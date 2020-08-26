import App from './base'
import Footer from '../components/footer'
import Header from '../components/header'
import PageHeading from '../components/page-heading'

const Basic = ({ children, heading, ...props }) => {
  return (
    <App>
      <Header />
      <PageHeading>{heading}</PageHeading>
      <div {...props}>
        {children}
      </div>
      <Footer />
    </App>
  )
}

export default Basic
