import { createBrowserRouter } from 'react-router-dom';

import Password from '../pages/Password/Password';
import Clock from '../pages/Clock/Clock';
import Letter from '../pages/Letter/Letter';
import Album from '../pages/Album/Album';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Password />
  },
  {
    path: '/clock',
    element: <Clock />
  },
  {
    path: '/letter',
    element: <Letter />
  },
  {
    path: '/album',
    element: <Album />
  }
  //   {
  //     path: "*", // Bắt các route không tồn tại
  //     element: <NotFound />,
  //   },
]);
