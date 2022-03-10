// import { Nav,  NavDropdown, FormControl } from 'react-bootstrap';
import { Container, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { parseJwt } from '../Auth/config';
import {logout} from '../Auth/config';

const Navbar = () => {

  const token = localStorage.getItem('t');
  const user = parseJwt(token);
  console.log(user);
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Easy<span className='' style={{ fontWeight: "bold", color: "#065157" }}>work</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Terms and Conditions</a>
            </li>
          </ul>

          {
            token ?
              <>
                <a href={`/requests/${user.userId}`} className='nav-link'>
                  <div className="mx-2">
                    <span className="text-secondary"><i className='fas fa-tools' style={{ fontSize: "1em" }}></i></span>
                  </div>
                </a>
                <div className="mx-2">
                  <div className='rounded-circle bg-info text-center d-flex align-items-center' style={{ height: "4ch", width: "4ch", fontWeight: 'bold' }}>
                    <span className="text-secondary text-light mx-auto">{user.username?.charAt(0)?.toUpperCase()}</span>
                  </div>
                </div>
                <button className='btn btn-sm btn-outline-secondary mx-1 mr-5' onClick={logout}>Logout <i className='fas fa-sign-out-alt'></i></button>
              </>
              :
              <>
                <a className='btn btn-sm btn-outline-secondary mx-1' href='/login'>Login</a>
                <a className='btn btn-sm btn-primary mx-1 mr-5' style={{background : "#065157"}} href='/register'>Register</a>
              </>

          }

        </div>
      </div>
    </nav>
  )

}

export default Navbar