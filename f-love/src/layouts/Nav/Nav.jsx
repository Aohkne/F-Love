import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Nav() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('item')}>
        <Link to={'/clock'}>
          <img src={'/images/clock-icon.png'} alt='clock-icon' />
        </Link>
      </div>

      <div className={cx('item')}>
        <Link to={'/letter'}>
          <img src={'/images/letter-icon.png'} alt='letter-icon' />
        </Link>
      </div>

      <div className={cx('item')}>
        <Link to={'/album'}>
          <img src={'/images/heart-icon.png'} alt='heart-icon' className={cx('heart-icon')} />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
