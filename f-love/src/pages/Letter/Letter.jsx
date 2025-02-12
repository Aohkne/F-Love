import { useState } from 'react';
import Header from '../../layouts/Header/Header';
import Nav from '../../layouts/Nav/Nav';
import styles from './Letter.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('letter-container')}>
        <div className={cx('letter-content')} onClick={() => setIsOpen(!isOpen)}>
          <div className={cx('envelope', { open: isOpen })}>
            <div className={cx('flap')} />
            <div className={cx('letter')}>
              <p>💖 HAPPY VALENTINE’S DAY 💖</p>
              <p>
                Ngày Valentine không chỉ dành riêng cho những cặp đôi mà còn là dịp để chúng ta lan tỏa yêu thương đến
                bạn bè, đồng đội và những người đã đồng hành cùng mình trên mọi chặng đường.
              </p>

              <p>
                🌟 FCoder xin gửi lời chúc đến toàn thể thành viên trong CLB – những người đam mê công nghệ và luôn sáng
                tạo không ngừng. Chúc các bạn có một ngày Valentine tràn đầy niềm vui, nhận được thật nhiều tình yêu
                thương và luôn giữ vững đam mê của mình!
              </p>

              <p>
                💙 Dù là coder hay designer, dù là backend hay frontend, thì tình yêu với công nghệ vẫn luôn kết nối
                chúng ta lại với nhau. Hãy tiếp tục lan tỏa nhiệt huyết và xây dựng một cộng đồng mạnh mẽ hơn nữa nhé!
              </p>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
}

export default Letter;
