import { useEffect, useState } from 'react';
import Header from '../../layouts/Header/Header';
import Nav from '../../layouts/Nav/Nav';
import styles from './Album.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Album() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch('/data/memory.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error loading image data:', error));
  }, []);

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('letter-container')}>
        <button onClick={toggleOverlay}>Look Back</button>
        <Nav />
      </div>

      {isOpen && (
        <div className={cx('overlay')}>
          <div className={cx('slideshow')}>
            <span className={cx('close-btn')} onClick={toggleOverlay}>
              &times;
            </span>
            <div className={cx('slides')}>
              {data.map((item, index) => (
                <img src={item.img} alt={`img ${index + 1}`} key={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Album;
