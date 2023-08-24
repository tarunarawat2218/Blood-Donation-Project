import React from 'react';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/images/logo1.png" alt="" width="75" height="55" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <li className="nav-link active">
                            <a href="/" activeClassName="active">Home</a>
                        </li>
                        <li className="nav-link active">
                            <a href="/search" activeClassName="active">Search</a>
                        </li>
                        <li className="nav-link active">
                            <a href="/donar" activeClassName="active">Donar Registration</a>
                        </li>
                        <li className="nav-link active">
                            <a href="/contact" activeClassName="active">Contact</a>
                        </li>
                        <li className="nav-link active">
                            <a href="/about" activeClassName="active">About</a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
};

