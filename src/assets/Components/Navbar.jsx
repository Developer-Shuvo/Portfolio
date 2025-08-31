import React from "react";
import logo from "./raviKumarLogo.webp";


const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center"></div>
            <a href="/" aria-label="Home borders">
                <img
                    src={logo}
                    width={50}
                    height={33}
                    className="mx-2"
                    alt="portfolio logo"
                />
            </a>
        </div>
    );
};

export default Navbar;
