import React from "react";
export default function Navbar(){
    return(
<>
<nav id="navbar-example" className="navbar bg-black navbar-expand-lg navbar-dark fixed-top my-bg">
  <div className="container">
    <a className="navbar-brand" href="#">START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/Portfolie">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>
)
}