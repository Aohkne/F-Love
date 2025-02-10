import styles from './Nav.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Nav() {
  return (
    <div className={cx('wrapper', 'container')}>
      Nav
      <p>123</p>
    </div>
  );
}

export default Nav;
