import Link from 'next/link'

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/login">             
              <a className="nav-link active" >LogIn</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signup">             
              <a className="nav-link active" >SignUp</a>
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
