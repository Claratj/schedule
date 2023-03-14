import classNames from 'classnames';
import IEvent from '../../types/IEvent';
import style from './Card.module.scss';

interface ICardProps extends IEvent {
	top: number;
	height: number;
	color: string;
}

export default function Card(props: ICardProps) {
	return (
		<div
			key={`card-event-${props.id}-room-${props.room}`}
			className={classNames(style.Card, [style[`Card--${props.color}`]])}
			style={{ top: `${props.top}px`, height: `${props.height}px` }}
		>
			<h2 className={style.Card__title}>{props.title}</h2>
			<div className={style.Card__info}>
				<p className={style.Card__vocal}>{props.vocal}</p>
				<span className={classNames(style.Card__tag, [style[`Card__tag--${props.color}`]])}>{props.theme}</span>
			</div>
		</div>
	);
}
