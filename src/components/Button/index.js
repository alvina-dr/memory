import React from "react";
import { Link } from "react-router-dom";
import './style.css'

function Button({ link, children }) {
    return (
        <Link to={link}>                    
            <button
             className="btn">{children}</button>
        </Link>
    )
}

export default Button