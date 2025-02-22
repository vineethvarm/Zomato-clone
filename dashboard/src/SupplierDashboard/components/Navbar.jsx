import React from 'react'

const Navbar = ({showLoginHandler, showRegisterHandler}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand fscontainer" href="#">Dasboard</a>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <span onClick={showLoginHandler}>
            <a className="nav-link fscontainer" aria-current="page" href="#">Log In</a>
            </span>
          </li>
          <li className="nav-item">
            <span onClick={showRegisterHandler}>
            <a className="nav-link fscontainer" aria-current="page" href="#">Sign Up</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar

