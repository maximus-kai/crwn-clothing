import React from 'react'
import {ReactComponent as Logo}  from '../../assets/xing.svg'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 navbar-fixed-top">
                <Link to='/' className="navbar-brand ">
                <Logo/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">HOME <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/shop">SHOP</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/signin">SIGN IN</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">CONTACTS</Link>
      </li>
    </ul>
  </div>
            </nav>
        </div>
    )
}

export default Header;
