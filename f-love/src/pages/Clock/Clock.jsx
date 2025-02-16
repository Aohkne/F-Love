import { useState, useEffect } from 'react';
import styles from './Clock.module.scss';
import classNames from 'classnames/bind';
import Nav from '../../layouts/Nav/Nav';
import Header from '../../layouts/Header/Header';

const cx = classNames.bind(styles);

function Clock() {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const startDate = new Date(2018, 0, 1, 0, 0, 0); // Ngày Thành Lập  1/1/2018 00:00:00

    const updateElapsedTime = () => {
      const now = new Date();
      const diffInSeconds = Math.floor((now - startDate) / 1000);
      setElapsedTime(diffInSeconds);
    };

    updateElapsedTime();
    const interval = setInterval(updateElapsedTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(elapsedTime / (24 * 3600));
  const hours = Math.floor((elapsedTime % (24 * 3600)) / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;

  return (
    <div className={cx('clock-container')}>
      <Header />
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>How long we have been together ?</h2>
        <div className={cx('clock-content')}>
          <div className={cx('clock-item')}>
            <span>{days} </span>
            <h2>Days</h2>
          </div>

          <div className={cx('divider')}>
            <span>:</span>
          </div>

          <div className={cx('clock-item')}>
            <span>{String(hours).padStart(2, '0')}</span>
            <h2>Hrs</h2>
          </div>

          <div className={cx('divider')}>
            <span>:</span>
          </div>

          <div className={cx('clock-item')}>
            <span>{String(minutes).padStart(2, '0')}</span>
            <h2>Mins</h2>
          </div>

          <div className={cx('divider')}>
            <span>:</span>
          </div>

          <div className={cx('clock-item')}>
            <span>{String(seconds).padStart(2, '0')} </span>
            <h2>Secs</h2>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
}

export default Clock;
