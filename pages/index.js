import Head from 'next/head'
import Layout from '../layouts/basic'
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
      <Columns>
        <div className="item">
          <Monitor />
          <h3>Professional</h3>
          <p>
            I started working as an independent web developer, taking a few
            smaller projects when I could. Talent Management Partners offered me
            a position as a Full Stack Developer and have worked there since.
          </p>
        </div>
        <div className="item">
          <Book />
          <h3>Education</h3>
          <p>
            Upon graduating highschool at Lone Peak High, I went to pursue my
            Associate of Arts are Snow College. After receiving my AA, I began
            working toward my Bachelor in Computer Science with an emphasis in
            Full Stack Web Development.
          </p>
        </div>
        <div className="item">
          <Smile />
          <h3>Personal</h3>
          <p>
            Living in Saratoga Springs, UT, I enjoy all that this beautiful
            state has to offer. I love anything from video games indoors, to
            exploring the wonderful wilderness. Getting to know people is a
            passion of mine so feel free to contact me!
          </p>
        </div>
      </Columns>
      <h3>Blah blah</h3>
    </Layout>
  )
}

export default Home
