import React from 'react'

function Navbar({title}) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-header">
                <span className="navbar-brand mb-0 h1">{title}</span>
            </div>
        </nav>
    )
}

export default Navbar
