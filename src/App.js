import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Main from './Layouts/Main';
import Quizes from './Components/Quizes/Quizes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics/>
        },
        {
          path: '/statistics',
          element: <Statistics/>
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path: '/quizes/:quizId',
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <Quizes/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
