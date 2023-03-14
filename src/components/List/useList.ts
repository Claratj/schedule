import { useEffect, useState } from 'react';
import IEvent from '../../types/IEvent';

export default function useList() {
	const [data, setData] = useState<IEvent[]>([]);

	const events: IEvent[] = [
		{
			id: 1,
			title: 'Introducción',
			theme: 'General',
			vocal: 'David Fernández García',
			fromTime: '9',
			toTime: '10',
			room: 1,
		},
		{
			id: 2,
			title: '¡Pásate a Micronaut!',
			theme: 'Backend',
			vocal: 'Miguel Ángel Pérez Muñoz',
			fromTime: '10',
			toTime: '11',
			room: 1,
		},
		{
			id: 3,
			title: 'La revolución de GraalVM',
			theme: 'DevOps',
			vocal: 'Lucas Élices Alonso',
			fromTime: '11',
			toTime: '13',
			room: 1,
		},
		{
			id: 4,
			title: 'Vue VS. el resto de escoria',
			theme: 'Frontend',
			vocal: 'Iñaki Heras Torrosa',
			fromTime: '10',
			toTime: '11',
			room: 2,
		},
		{
			id: 5,
			title: 'Brujería con Typescript',
			theme: 'Frontend',
			vocal: 'Mario Fernández Tapia',
			fromTime: '11',
			toTime: '12',
			room: 2,
		},
		{
			id: 6,
			title: 'Kubernetes para Dummmies',
			theme: 'Frontend',
			vocal: 'Lucía Castro de la Torre',
			fromTime: '12',
			toTime: '13',
			room: 2,
		},
	];
	useEffect(() => {
		setData(events);
	}, []);

	let roomOne: IEvent[] = [];
	let roomTwo: IEvent[] = [];

	data.forEach((event) => {
		event.room === 1 ? roomOne.push(event) : roomTwo.push(event);
	});

	function calculateDistanceFromTop(time: string): number {
		switch (time) {
			case '8':
				return 0;
			case '9':
				return 90;
			case '10':
				return 180;
			case '11':
				return 270;
			case '12':
				return 360;
			case '13':
				return 450;
			case '14':
				return 540;
			case '15':
				return 630;
			case '16':
				return 720;
			case '17':
				return 810;
			default:
				return 0;
		}
	}

	function calculateDivHeight(fromTime: string, toTime: string) {
		return (Number(toTime) - Number(fromTime)) * 100;
	}

	function getCardColor(theme: string) {
		switch (theme) {
			case 'Backend':
				return 'blue';
			case 'DevOps':
				return 'purple';
			case 'Frontend':
				return 'orange';
			default:
				return 'yellow';
		}
	}

	return {
		roomOne,
		roomTwo,
		calculateDistanceFromTop,
		calculateDivHeight,
		getCardColor,
	};
}
