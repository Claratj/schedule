import ILecture from '../types/ILecture';

const lectures: ILecture[] = [
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

export default lectures;
