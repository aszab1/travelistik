import { Link, Outlet, useLocation, useNavigation } from 'react-router-dom'



function App() {
  const currentPage = useLocation().pathname
  const navigation = useNavigation()
  // console.log(import.meta.env.MODE)

  return (
    <>
      {currentPage !== '/' ?
        <>
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
            <Link to={'/auth/login/'}>
              <button>Login</button>
            </Link>
            <Link to={'/auth/register/'}>
              <button>Register</button>
            </Link >
          </div>
        </>
      }
    </>
  )
}

export default App
