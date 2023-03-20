import TTheme from './ITheme';

export default interface ILecture {
	id: number;
	title: string;
	theme: TTheme;
	vocal: string;
	fromTime: string;
	toTime: string;
	room: number;
}
