import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-warning bg-warning py-3 fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <img src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png" alt="Bootstrap" width="45" height="40" className='rounded-5' />

          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header bg-warning">
              <h5 className="offcanvas-title pb-3 fw-bold" id="offcanvasNavbarLabel">Foodies</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body  ">
              <ul className="navbar-nav justify-content-end flex-grow-1  pe-3">
                <li className="nav-item">
                  <Link className="nav-link active fs-1 text-warning" aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fs-1 text-warning" aria-current="page" to="/menu">MENU</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fs-1 text-warning" aria-current="page" to="/about">ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fs-1 text-warning" aria-current="page" to="/contact">CONTACT</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

