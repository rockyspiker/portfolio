import Head from 'next/head'
import Layout from '../layouts/basic'
import Section from '../components/section'
import Website from '../components/website'
import Link from 'next/link'

const MyWork = () => {
  return (
    <Layout heading="My Work">
      <Head>
        <title>My Work</title>
      </Head>
      <Website
        className="trakpacker"
        href="https://trakpacker.netlify.app/"
        title="TrakPacker"
      >
        <h2>TrakPacker</h2>
        <p>
          A senior capstone project of mine in college, this application allows
          you to store common routes you may use and provides public transportation
          options available to you.
        </p>
      </Website>
      <Website
        className="teletalkers"
        href="https://teletalkers.netlify.app/"
        title="TeleTalkers"
      >
        <h2>TeleTalkers</h2>
        <p>
          A current side project that has been a lot of fun to work on and
          experiment with new frameworks and libraries.
        </p>
      </Website>
      <Website
        className="jp-life"
        href="https://jamespembertonlifecoach.com/"
        title="JP Life Coach"
      >
        <h2>JP Life Coach</h2>
        <p>
          James Pemberton Life Coaching was one of my first projects and helped
          me grow a lot. I gained a lot of valuable knowledge from this
          experience.
        </p>
      </Website>
      <Section>
        <h3>
          More of my work can be found on{' '}
          <Link href="https://github.com/rockyspiker">
            <a target="_blank">Github</a>
          </Link>
          .
        </h3>
      </Section>
    </Layout>
  )
}

export default MyWork
