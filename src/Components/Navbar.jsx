import React from "react";

export const Navbar = () => {
  return (
    <div>
      
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="/rev.svg" className="rev-logo" alt="" />
            <a href="#" className="restart">
              Restart
            </a>
            <img src="/logo.png" className="main-logo" alt="" />
          </a>

          <img src="./phn.svg" className="phone-logo" alt="" />
          <img src="./msg.png" className="message-logo" alt="" />
        </div>
      </nav>
    </div>
  );
};
