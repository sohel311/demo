import React from "react";
import {Link} from "react-router-dom";
const Header = () =>
{
    return(
        <div className="header">
            <div className="main">
            <div className="Logo">
                <h1>Elipse</h1>
            </div>
            <div className="links">
                <ul>
                    <Link to="/login">
                        <li>LoginUser</li>
                    </Link>
                    <Link to="/admin">
                        <li>LoginAdmin</li>
                    </Link>

                </ul>
            </div>
            </div>
        </div>
    );
}

export default Header;
