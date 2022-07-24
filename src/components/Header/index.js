import React from 'react';

function Header() {
    return (
        //JSX HERE
        <header>
            <h1>Michael Wright</h1>
            {/* Insert Nav Here */}
            <div className="nav">
            <button>About Me</button>
            <button>Portfolio</button>
            <button>Contact</button>
            <button>Resume</button>
            </div>
        </header>
    )
}

export default Header;