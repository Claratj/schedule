import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventPage from '../pages/EventPage/Event.page';
import App from '../pages/HomePage/Home.page';
import NotFoundPage from '../pages/NotFoundPage/NotFound.page';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/event" element={<EventPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}
