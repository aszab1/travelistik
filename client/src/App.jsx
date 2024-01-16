import { Link, Outlet, useLocation, useNavigation } from 'react-router-dom'
import NavBar from './components/Nav'



function App() {
  const currentPage = useLocation().pathname
  const navigation = useNavigation()
  

  return (
    <>
      {currentPage !== '/' ?
        <>
        <NavBar />
          <main>
            {
              navigation.state === 'idle' ?
                <Outlet />
                :
                <div className='loading'></div>
            }
          </main>
        </>
        :
        <>
          <div>
            <h1>Hello</h1>
            <Link to={'/login/'}>
              <button>Login</button>
            </Link>
            <Link to={'/register/'}>
              <button>Register</button>
            </Link >
          </div>
        </>
      }
    </>
  )
}

export default App
