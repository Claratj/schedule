import { useEffect, useState } from 'react';
import { IFilter } from '../../components/Filters/Filters';
import lecturesRepository from '../../repositories/lectures.repository';
import ILecture from '../../types/ILecture';

interface IEventProps extends IFilter {}

export default function useEvent(props: IEventProps) {
	const [lectures, setLectures] = useState<ILecture[]>([]);
	const [vocals, setVocals] = useState<string[]>([]);

	async function getLectures() {
		const lectures = await lecturesRepository.list(props);
		setLectures(lectures);
	}

	async function getAllVocals() {
		const lectures = await lecturesRepository.list(props);
		setVocals([...lectures.map((lecture) => lecture.vocal)]);
	}

	useEffect(() => {
		getLectures();
	}, []);

	useEffect(() => {
		getAllVocals();
	}, []);

	useEffect(() => {
		getLectures();
	}, [props]);

	return {
		lectures,
		vocals,
	};
}
