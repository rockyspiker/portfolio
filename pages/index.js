import Head from 'next/head'
import Link from 'next/link'
import Layout from '../layouts/hero'
import Book from '../components/icons/book-open'
import Monitor from '../components/icons/monitor'
import Smile from '../components/icons/smile'
import Columns from '../components/columns'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h1>Who Am I?</h1>
      <h3>
        A little more about <span className="accent">me</span>.
      </h3>
      <Columns>
        <div className="item">
          <Monitor />
          <h2>Professional</h2>
          <p>
            I started working as an independent web developer, taking a few
            smaller projects when I could. Talent Management Partners offered me
            a position as a Full Stack Developer and I have worked there since
            January of 2019.
          </p>
        </div>
        <div className="item">
          <Book />
          <h2>Education</h2>
          <p>
            After graduating from Lone Peak High School and receiving my
            Associate of Arts from Snow College, I went on to pursue my Bachelor
            in Computer Science at Utah Valley University and will graduate
            Spring of 2021.
          </p>
        </div>
        <div className="item">
          <Smile />
          <h2>Personal</h2>
          <p>
            Being a Utah based Software Engineer, I always look forward to new
            challenges and opportunities around me. I am always eager to take on
            new projects so feel free to <Link href="/contact"><a>contact me</a></Link> for whatever developing
            needs you may have.
          </p>
        </div>
      </Columns>
    </Layout>
  )
}

export default Home
