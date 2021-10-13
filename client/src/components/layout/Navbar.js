import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Community</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/forum">Forum</Link>
                    </li>
                </ul>
                <div className="float-end">
                    <Link className="btn btn-primary" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary ms-2" to="/register" role="button">Register</Link>
                </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
