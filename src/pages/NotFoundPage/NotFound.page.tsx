import { Link } from 'react-router-dom';
import style from './NotFound.page.module.scss';

export default function NotFoundPage() {
	return (
		<div className={style.Error}>
			<h1 className={style.Error__title}>Ups...</h1>
			<p className={style.Error__text}>
				It seems like the page you're looking for doesn't exits <span className={style.Error__emoji}>🧐</span>.
			</p>
			<Link to={'/'}>
				Let's leave the unknown for now <span className={style.Error__emoji}>🏡</span>
			</Link>
		</div>
	);
}
