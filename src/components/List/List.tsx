import classnames from 'classnames';
import IEvent from '../../types/IEvent';
import Card from '../Card/Card';
import style from './List.module.scss';
import useList from './useList';

export interface IListProps {
	events: IEvent[];
	rooms: number[];
}

export default function List(props: IListProps) {
	const { roomOne, roomTwo, calculateDistanceFromTop, calculateDivHeight, getCardColor } = useList();

	props.events.forEach((event) => {
		event.room === 1 ? roomOne.push(event) : roomTwo.push(event);
	});

	const officeHours: string[] = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
	let fromTop: string;

	return (
		<div className={style.List} data-testid="events-list">
			<div className={style.List__headers} data-testid="events-list-headers">
				<div className={style.List__titles}></div>
				{props.rooms.map((room, i) => (
					<div className={style.List__titles} key={`room-${i}`}>
						<h3>Room {room}</h3>
					</div>
				))}
			</div>

			<div className={style.List__body} data-testid="events-list-body">
				<div className={style.List__col}>
					{officeHours.map((hour, i) => (
						<div key={i} className={style.List__hours}>
							{hour}
						</div>
					))}
				</div>
				<div className={classnames(style.List__col, [`${style['List__col--rel']}`])}>
					{roomOne.map((event) => (
						<Card
							key={event.id}
							top={calculateDistanceFromTop(event.fromTime)}
							height={calculateDivHeight(event.fromTime, event.toTime)}
							color={getCardColor(event.theme)}
							{...event}
						/>
					))}
				</div>
				<div className={classnames(style.List__col, [`${style['List__col--rel']}`])}>
					{roomTwo.map((event) => (
						<Card
							key={event.id}
							top={calculateDistanceFromTop(event.fromTime)}
							height={calculateDivHeight(event.fromTime, event.toTime)}
							color={getCardColor(event.theme)}
							{...event}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
