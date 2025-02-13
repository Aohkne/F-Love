import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { useEffect } from 'react';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

function App() {
  useEffect(() => {
    console.log('💖 web chưa tối ưu, người làm web đang bị deadline dí');
  }, []);

  return (
    <div className='App'>
      <RouterProvider router={router} />
      <MusicPlayer />
    </div>
  );
}

export default App;
