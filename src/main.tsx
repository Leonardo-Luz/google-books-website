import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Error } from './routes'
import { Book } from './routes/Book.route.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/book/:search',
        element: <Book />
      }
    ]
  }
])
const root = createRoot(document.getElementById('root')!)

root.render(<RouterProvider router={router} />)
