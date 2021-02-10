import Head from 'next/head'
import Link from 'next/link'
import Layout from '../layouts/hero'
import Book from '../components/icons/book-open'
import Monitor from '../components/icons/monitor'
import User from '../components/icons/user'
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
            smaller projects when I could. Picking up my first position as a
            Full Stack Developer in January of 2019, I have continued to grow my
            skills, most recently at Hoodoo Digital as a Software Engineer since
            October of 2020.
          </p>
        </div>
        <div className="item">
          <Book />
          <h2>Education</h2>
          <p>
            After receiving my Associate of Arts from Snow College, I went on to
            pursue my Bachelor in Computer Science at Utah Valley University.
            Nearing the end of my degree, my expected graduation date will be in
            Spring of 2021.
          </p>
        </div>
        <div className="item">
          <User />
          <h2>Personal</h2>
          <p>
            California born and Utah raised, I have enjoyed all that Utah has to
            offer. Currently living in Saratoga Springs, my wife and I enjoy all
            sorts of recreation from pickleball to hiking, and occasionally even
            axe throwing.
          </p>
        </div>
      </Columns>
    </Layout>
  )
}

export default Home
