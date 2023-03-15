import classnames from 'classnames';
import IEvent from '../../types/IEvent';
import Card from '../Card/Card';
import style from './List.module.scss';
import useList from './useList';

interface IListProps {
	events: IEvent[];
}

export default function List(props: IListProps) {
	const { roomOne, roomTwo, calculateDistanceFromTop, calculateDivHeight, getCardColor } = useList();

	props.events.forEach((event) => {
		event.room === 1 ? roomOne.push(event) : roomTwo.push(event);
	});

	const officeHours: string[] = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
	const rooms: number[] = [1, 2, 3];
	let fromTop: string;

	return (
		<div className={style.List}>
			<div className={style.List__headers}>
				<div className={style.List__titles}></div>
				<div className={style.List__titles} style={{}}>
					Sala 1
				</div>
				<div className={style.List__titles} style={{}}>
					Sala 2
				</div>
			</div>

			<div className={style.List__body}>
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
