import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import classNames from 'classnames/bind';

import styles from './MusicPlayer.module.scss';

const cx = classNames.bind(styles);

function MusicPlayer() {
  const [volume, setVolume] = useState(0.5);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const newSound = new Howl({
      src: ['/music/music.mp3'],
      volume,
      loop: true
    });

    newSound.play();
    setSound(newSound);

    return () => {
      newSound.stop();
      newSound.unload();
    };
  }, [volume]);

  useEffect(() => {
    if (sound) {
      sound.volume(volume);
    }
  }, [volume, sound]);

  return (
    <div className={cx('wrapper')}>
      <input
        type='range'
        min='0'
        max='1'
        step='0.01'
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className={cx('slider')}
      />
      <span className={cx('volume-text')}>Volume: {Math.round(volume * 100)}%</span>
    </div>
  );
}

export default MusicPlayer;
