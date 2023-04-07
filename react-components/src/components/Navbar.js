import React from 'react'

function Navbar() {
  return (
    <div class="container bg-dark ">
    <header className="d-flex flex-wrap justify-content-between py-3 shadow-lg">

      <div className="text-white">
        <h2>logo</h2>
      </div>
      <ul className="nav nav-pills text-white fs-5">
        <li className="nav-item "><a href="#home" className="nav-link text-white" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#about" className="nav-link text-white">About</a></li>
        <li className="nav-item"><a href="#gallerie" className="nav-link text-white">Gallerie</a></li>
        <li className="nav-item"><a href="#contact" className="nav-link text-white">Contact</a></li>
      </ul>
    </header>
</div>
  )
}

export default Navbar
