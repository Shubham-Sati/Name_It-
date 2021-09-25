import React from 'react';
import logo from './header_image.png';
import './Header.css';

const Header = ({headerExpanded , headerTitle} ) => {

    return(
        <div className = "head-container">
            <img src={logo} alt=" Not found" className = {`head-image ${headerExpanded ?'head-image-expanded' : 'head-image-contracted'}`} />
            <h1 className={`head-text ${headerExpanded ?
            'head-text-expanded' : 'head-text-contracted'
            }`}>{headerTitle}</h1>
        </div>
    )
}



export default Header;

