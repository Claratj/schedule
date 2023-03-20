import classnames from 'classnames';
import ILecture from '../../types/ILecture';
import Card from '../Card/Card';
import style from './List.module.scss';
import useList from './useList';

export interface IListProps {
	lectures: ILecture[];
	rooms: number[];
}

export default function List(props: IListProps) {
	const { roomOne, roomTwo, calculateDistanceFromTop, calculateDivHeight, getCardColor } = useList();

	props.lectures.forEach((lecture) => {
		lecture.room === 1 ? roomOne.push(lecture) : roomTwo.push(lecture);
	});

	const officeHours: string[] = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];

	return (
		<div className={style.List} data-testid="lectures-list">
			<div className={style.List__headers} data-testid="lectures-list-headers">
				<div className={style.List__titles}></div>
				{props.rooms.map((room, i) => (
					<div className={style.List__titles} key={`room-${i}`}>
						<h3>Room {room}</h3>
					</div>
				))}
			</div>

			<div className={style.List__body} data-testid="lectures-list-body">
				<div className={style.List__col}>
					{officeHours.map((hour, i) => (
						<div key={i} className={style.List__hours}>
							{hour}
						</div>
					))}
				</div>
				<div className={classnames(style.List__col, [`${style['List__col--rel']}`])}>
					{roomOne.map((lecture) => (
						<Card
							key={lecture.id}
							top={calculateDistanceFromTop(lecture.fromTime)}
							height={calculateDivHeight(lecture.fromTime, lecture.toTime)}
							color={getCardColor(lecture.theme)}
							{...lecture}
						/>
					))}
				</div>
				<div className={classnames(style.List__col, [`${style['List__col--rel']}`])}>
					{roomTwo.map((lecture) => (
						<Card
							key={lecture.id}
							top={calculateDistanceFromTop(lecture.fromTime)}
							height={calculateDivHeight(lecture.fromTime, lecture.toTime)}
							color={getCardColor(lecture.theme)}
							{...lecture}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
