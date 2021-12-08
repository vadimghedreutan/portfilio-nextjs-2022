import Card from './Card'
import { RichText } from 'prismic-reactjs'

function Cards({ projects }) {
	return (
		<>
			{projects.results.map((project) => (
				<Card
					key={project.uid}
					img={project.data.image.url}
					alt={project.data.image.alt}
					title={RichText.render(project.data.title)}
					description={RichText.render(project.data.description)}
					link={project.data.link.url}
				/>
			))}
		</>
	)
}

export default Cards
