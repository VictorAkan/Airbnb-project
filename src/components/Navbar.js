import logo from "./images/Vector.png"

export default function Navbar() {
    return(
      <div className="nav_body">
        <div className="">
          <nav className="nav-construct">
            <img className="ms-3" src={logo}
                alt="Website logo"
            />
          </nav>
        </div>
      </div>
    )
  }