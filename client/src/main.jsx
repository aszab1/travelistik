import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './index.css'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

// Page components 
import App from './App.jsx'
import ErrorPage from './components/ErrorPage'
import Register from '../src/components/Register'
import Login from '../src/components/Login'
import Logout from '../src/components/Logout'
import Home from '../src/components/Home'
import SingleInspiration from './components/SingleInspiration'
import InspirationCreate from './components/InspirationCreate'
import InspirationEdit from './components/InspirationEdit'
import BoardCreate from './components/BoardCreate'
import Board from './components/Board'
import SingleBoard from './components/SingleBoard'
import BoardEdit from './components/BoardEdit'


// Loaders
import { registerUser, loginUser, logoutUser } from './utils/actions/auth.js'

// Actions
import { getInspirations, getSingleInspiration} from './utils/helpers/loaders.js'
import { getBoards, getSingleBoard } from './utils/helpers/boardLoaders.js'
import { createInspiration, editInspiration, deleteInspiration } from './utils/actions/inspiration.js'
import { createBoard, editBoard, deleteBoard } from './utils/actions/boards.js'


const router = createBrowserRouter(
  [{
    path: '/',
    element: <App />,
    errorElement: < ErrorPage />,
    children: [
      {
        path: '/register',
        element: <Register />,
        action: async ({ request }) => registerUser(request)
      },
      {
        path: '/login',
        element: <Login />,
        action: async ({ request }) => loginUser(request)
      },
      {
        path: '/logout',
        element: <Logout />,
        action: async () => logoutUser()
      },
      {
        path: '/home',
        element: <Home />,
        loader: getInspirations
      },
      {
        path: '/home/:id',
        element: < SingleInspiration />,
        loader: async ({ params }) => getSingleInspiration(params.id),
        action: async ({ params }) => deleteInspiration(params.id)
      },
      {
        path: '/home/create',
        element: <InspirationCreate />,
        action: async ({ request }) => createInspiration(request)

      },
      {
        path: '/home/:id/edit',
        element: <InspirationEdit />,
        action: async ({ request, params }) => editInspiration(request, params.id),
        loader: async ({ params }) => getSingleInspiration(params.id)

      },
      {
        path: '/boards',
        element: <Board />,
        loader: getBoards
       
      },
      {
        path: '/boards/:id',
        element: < SingleBoard />,
        loader: async ({ params }) => getSingleBoard(params.id),
        action: async ({ params }) => deleteBoard(params.id)
      },
      {
        path: '/boards/create',
        element: <BoardCreate />,
        action: async ({ request }) => createBoard(request)
      },
      {
        path: '/boards/:id/edit',
        element: <BoardEdit />,
        action: async ({ request, params }) => editBoard(request, params.id),
        loader: async ({ params }) => getSingleBoard(params.id)
    }

    ]
  }]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
