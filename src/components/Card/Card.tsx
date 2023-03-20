import classNames from 'classnames';
import ILecture from '../../types/ILecture';
import style from './Card.module.scss';

export interface ICardProps extends ILecture {
	top: number;
	height: number;
	color: string;
}

export default function Card(props: ICardProps) {
	return (
		<div
			key={`card-event-id-${props.id}-room-${props.room}`}
			className={classNames(style.Card, [style[`Card--${props.color}`]])}
			style={{ top: `${props.top}px`, height: `${props.height}px` }}
			data-testid="card-event-room"
		>
			<h2 className={style.Card__title} data-testid="card-event-title">
				{props.title}
			</h2>
			<div className={style.Card__info} data-testid="card-event-info">
				<p className={style.Card__vocal} data-testid="card-event-vocal">
					{props.vocal}
				</p>
				<span
					className={classNames(style.Card__tag, [style[`Card__tag--${props.color}`]])}
					data-testid="card-event-tag"
				>
					{props.theme}
				</span>
			</div>
		</div>
	);
}
