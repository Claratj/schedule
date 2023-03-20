import { Link } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App__header">
				<h1>Your events for today</h1>
			</header>
			<main className="App__main">
				<ul>
					<Link to={'/event'}>
						<li>Event</li>
					</Link>
				</ul>
			</main>
		</div>
	);
}

export default App;
