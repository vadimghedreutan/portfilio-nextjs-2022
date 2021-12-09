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
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					property="og:title"
					content="Vadim Ghedreutan | Portfolio"
				/>
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
			<div className="container-grid min-h-full">
				<sidebar>
					<div className="sidebar">
						<Header />
						<Social />
						<About />
					</div>
				</sidebar>
				<main className="container-grid_main">
					<div className="cards-grid 2xs:flex 2xs:overflow-x-scroll gap-2 scrollbar-hide 2xs:snap-x">
						<Cards projects={projects} />
					</div>
				</main>
				{/* mobile */}
				<section className="sm:hidden">
					<div className="flex items-center justify-between">
						<div className="w-7/12">
							<img
								src="./img/ui_ux-designer_v3.svg"
								alt="vadim ghedreutan portfolio"
							/>
						</div>
						<div className="flex-1">
							<p className="flex flex-col font-semibold text-sm space-y-1">
								<span className="text-red-500">Designed &</span>
								<span>Coded by me</span>
								<span>© 2021</span>
							</p>
						</div>
					</div>
				</section>
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
