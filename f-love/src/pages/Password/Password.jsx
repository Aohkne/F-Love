import styles from './Password.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Password() {
  return <div className={cx('wrapper')}></div>;
}

export default Password;
