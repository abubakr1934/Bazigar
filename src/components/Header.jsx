import React from 'react';
import '../../src/App.css';

function Header() {
    return (
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none col-md-6">
            <img src="https://bazigar.in/assets/website/images/logo.svg" alt="Bazigar Logo" className="img-fluid d-none d-md-block" width="100" height="100" />
          </a>
  
          <ul className="nav nav-pills col-md-6 justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link">Blogs</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" id="languagesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Languages
              </a>
              <ul className="dropdown-menu" aria-labelledby="languagesDropdown">
                <li><a className="dropdown-item" href="#">Bengali</a></li>
                <li><a className="dropdown-item" href="#">Gujrati</a></li>
                <li><a className="dropdown-item" href="#">Hindi</a></li>
                <li><a className="dropdown-item" href="#">Malyalam</a></li>
                <li><a className="dropdown-item" href="#">Marathi</a></li>
                <li><a className="dropdown-item" href="#">Punjabi</a></li>
                <li><a className="dropdown-item" href="#">Sindhi</a></li>
                <li><a className="dropdown-item" href="#">Tamil</a></li>
                <li><a className="dropdown-item" href="#">Urdu</a></li>
                
              </ul>
            </li>
          </ul>
        </header>
      </div>
      
    );
  };
  export default Header;