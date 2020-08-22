import React, {useState} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () =>{
    const [active, setActive] = useState(0);
    // const [more, setmore] = useState(0);
    console.log(1);
    return(
        <div class="navbar is-light is-spaced" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <p class="navbar-item is-size-4 has-text-weight-bold">
                    <Link to='/'> <span class='has-text-black'> News Analysis </span></Link>
                    {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
                </p>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" 
                onClick={()=> setActive(active^1)} >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class={active ?"navbar-menu is-active": "navbar-menu"}>
                <div class="navbar-start">
                    <a class="navbar-item">
                        <Link  to='/'>  <span class='has-text-black'>News Feed</span> </Link>
                    </a>

                    <a class="navbar-item">
                        <Link  to='/custom-analysis'> <span class='has-text-black'>Custom Analysis</span> </Link>
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        More
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                <Link  to='/about'><span class='has-text-black'>  About </span></Link>
                            </a>
                            {/* <a class="navbar-item">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a> */}
                            <hr class="navbar-divider" />
                            <a class="navbar-item">
                                <Link to='/issue'><span class='has-text-black'> Report an issue </span></Link>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                    Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;