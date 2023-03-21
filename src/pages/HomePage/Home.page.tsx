import { Link } from 'react-router-dom';
import './Home.css';
import useHomePage from './useHomePage';

export default function HomePage() {
	const { events } = useHomePage();
	return (
		<div className="Home">
			<header className="Home__header">
				<h1>Your events for today</h1>
			</header>
			<main className="Home__main">
				<ul>
					{events.map((event) => {
						<Link to={'/event'}>
							<li>{event.title}</li>
						</Link>;
					})}
				</ul>
			</main>
		</div>
	);
}
