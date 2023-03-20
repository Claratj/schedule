import ILecture from '../../types/ILecture';

export default function useList() {
	let roomOne: ILecture[] = [];
	let roomTwo: ILecture[] = [];

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
		return (Number(toTime) - Number(fromTime)) * 80;
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
