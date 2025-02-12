import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Password.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const keys = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['#', '0', 'DEL']
];

function Password() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (key) => {
    if (key === 'DEL') {
      setPassword(password.slice(0, -1));
    } else if (key === '#') {
      if (password === '1402') {
        navigate('/clock');
      } else {
        alert("Hint: valentine's day....");
      }
    } else {
      setPassword(password + key);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('img-container')}>
          <img src='/images/symbol.jpg' alt='symbol-logo' />
        </div>

        <div className={cx('password-container')}>
          <input type='password' value={password} readOnly className={cx('input')} />

          <div className={cx('password-num')}>
            {keys.map((row, rowIndex) => (
              <div key={rowIndex} className={cx('row')}>
                {row.map((key) => (
                  <button key={key} onClick={() => handleKeyPress(key)} className={cx('key')}>
                    {key}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
