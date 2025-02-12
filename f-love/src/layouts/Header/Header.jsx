import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('wrapper')}>
      <img src='/images/logo-word.png' alt='' className={cx('logo')} />
      <div className={cx('title')}>Happy Valentine's Day</div>
    </div>
  );
}

export default Header;
