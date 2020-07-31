import Head from 'next/head'
import '../styles/index.scss'

const Base = (props) => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <main {...props}>{props.children}</main>
    </React.Fragment>
  )
}

export default Base
