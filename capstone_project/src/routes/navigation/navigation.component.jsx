import { Fragment } from "react"
import { Link, Outlet } from "react-router"
import CrownLogo from '../../assets/crown.svg'
import './navigation.styles.scss'
import Authentication from "../authentication/authentication.component"

const Navigation = () => (
  <Fragment>
    <nav className="navigation">
        <Link className="logo-container" to='/'>
            <img className="logo" src={CrownLogo} alt="Crown Logo" />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">SHOP</Link> 
            <Link to="/auth">SIGN IN</Link>
        </div>
    </nav>
    <Outlet/>
  </Fragment>
)
export default Navigation