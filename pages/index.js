import Head from 'next/head'
import { attributes, react as HorseContent } from '../content/horses.md'
import Date from '../utilities/date'
export default function Home() {
	let { title, date, horses } = attributes

	return (
		<>
			<Head>
				<script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Inter'
				></link>
				<title>Horses</title>
			</Head>
			<article className='container'>
				<h1>{title}</h1>
				{/* <p>{Date({ date })}</p> */}
				<p>{date}</p>
				<p>Date()</p>

				<HorseContent />
				<ul>
					{horses.map((horse, k) => (
						<li key={k}>
							<h2>{horse.name}</h2>
							<p>{horse.description}</p>
							<p>{horse.character}</p>
							<br></br>
						</li>
					))}
				</ul>
			</article>
		</>
	)
}
