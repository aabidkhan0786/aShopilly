import Link from 'next/link'
import { useRouter } from 'next/router'
const NavBar = () => {
  const router = useRouter();

  const active_nav = (route) => {
    if (route == router.pathname) {
      return "active bg-danger  nav-item"
    } else {
      return "nav-item"
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg ">
        <div className="container-fluid">
          <a className="navbar-brand h2" href="/">aShoppilly</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
              <li className={active_nav("/login")}>
                <Link href="/login">
                  <a className="nav-link" >LogIn</a>
                </Link>
              </li>
              <li className={active_nav("/signup")}>
                <Link href="/signup">
                  <a className="nav-link " >SignUp</a>
                </Link>
              </li>
              <li className={active_nav("/create")}>
                <Link href="/create">
                  <a className="nav-link " >Create</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
