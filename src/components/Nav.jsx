import React from 'react';
import Logo from '../assets/images/logo.svg';
import Search from '../assets/images/search.svg';
import Store from '../assets/images/store.svg';

function Nav() {
  return (
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <ul className='list-styled'>
                <li>
                    <img src={Logo} alt='Apple'/>
                </li>
                <li>
                    <a className='link-styled'>Home</a>
                </li>
                <li>
                    <a className='link-styled'>Store</a>
                </li>
                <li>
                    <a className='link-styled'>mac</a>
                </li>
                <li>
                    <a className='link-styled'>Ipad</a>
                </li>
                <li>
                    <a className='link-styled'>Iphone</a>
                </li>
                <li>
                    <a className='link-styled'>Watch</a>
                </li>
                <li>
                    <a className='link-styled'>Airpods</a>
                </li>
                <li>
                    <a className='link-styled'>Tv & Home</a>
                </li>
                <li>
                    <a className='link-styled'>Entertaiment</a>
                </li>
                <li>
                    <a className='link-styled'>Accessories</a>
                </li>
                <li>
                    <a className='link-styled'>Support</a>
                </li>
                <li>
                    <img src={Search} alt='Search'/>
                </li>
                <li>
                    <img src={Store} alt='Store'/>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav