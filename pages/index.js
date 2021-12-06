import Prismic from '@prismicio/client'
import { client } from '../prismic-configuration'
import Head from 'next/head'
import Social from '../components/Social'
import Header from '../components/Header'
import About from '../components/About'
import Cards from '../components/Cards'

export default function Home({ projects }) {
  return (
    <div className="3xl:max-w-screen-2xl mx-auto w-full">
      <Head>
        <title>Vadim Ghedreutan | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Vadim Ghedreutan | Portfolio" />
        <meta
          name="description"
          content="You need a website for your startup or business?"
        />
        <meta
          name="keywords"
          content="website builder, web designer, responsive web design"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="grid grid-cols-3 min-h-screen">
        <sidebar className="relative">
          <div
            className="w-full sticky inset-0
          flex flex-col min-h-screen"
          >
            <Header />
            <Social />
            <About />
            {/* share icons */}
          </div>
        </sidebar>
        <main className="col-span-2 p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            <Cards projects={projects} />
          </div>
        </main>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const data = await client.query(
    Prismic.Predicates.at('document.type', 'projects'),
    { orderings: '[my.projects.date desc]' }
  )

  return {
    props: {
      projects: data,
    },
  }
}
