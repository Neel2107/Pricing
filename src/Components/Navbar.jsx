import React from "react";

export const Navbar = () => {
  return (
      <div class="navbar ">
        <div className="">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="/rev.svg" className="rev-logo" alt="" />
          <p className="restart text-secondary  ">Restart</p>
        </a>
        </div>
        {/* <div className=""> */}
          <img src="/jetty.png" className="jetty-logo" alt="" />
        {/* </div> */}
        <div className="lil">
          <img src="./phn.svg" className="phone-logo me-5 " alt="" />
          <img src="./msg.png" className="message-logo me-5" alt="" />
        </div>
      </div>
    
  );
};
