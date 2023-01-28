import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Plans = () => {
  const setAnimation = () => {
    document.getElementById("sidecardL").className =
      "card text-center p-3 card-width animate__animated animate__fadeOutRight";
    document.getElementById("sidecardR").className =
      "card text-center p-3 card-width animate__animated animate__fadeOutLeft";
    setTimeout(function () {
      (document.getElementById("secondPage").className = "showC"),
        (document.getElementById("FirstPage").className = "hideC");
    }, 500);
  };
  return (
    <div>
      <div id="FirstPage">
        <Navbar />
        <div className="main-text mt-5">
          <h1 className="fw-bold">Pick a base plan:</h1>
        </div>

        <div className="container c-row to-center">
          <div className="card text-center p-3 card-width" id="sidecardL">
            <div>
              <h1 className="fw-bold text-secondary">Basic</h1>
            </div>

            <div>
              <p className=" text-secondary">
                A no-frills plan to meet most landlords' requirements.
              </p>
            </div>

            <div className=" d-flex price align-self-center ">
              <span className="text-secondary mt-3 fw-bold  me-1">$</span>
              <span className=" fw-bold text-secondary money ">12</span>
              <div className=" d-flex flex-column  ">
                <span className="text-secondary mt-3 fw-bold fs-4 adjust">
                  55
                </span>
                <span className="text-secondary adjust ">/mo</span>
              </div>
            </div>

            <div className="d-flex justify-content-center  align-items-center ">
              <div className="line"></div>
              <p className="text-secondary letter-spacing fw-bold ">
                KEY FEATURES
              </p>
              <div className="line"></div>
            </div>
            <div className="mt-4">
              <div className="fetures  fw-bold text-secondary">
                <p>Everyday Belongings</p>
                <p>$10,000</p>
              </div>
              <div className="fetures fw-bold text-secondary">
                <p>Portable Electronics</p>
                <p>$1,000</p>
              </div>
              <div className="fetures fw-bold text-secondary">
                <p>Personal Liability</p>
                <p>$100,000</p>
              </div>
            </div>
          </div>

          <div
            className="card text-center shadow p-3 bg-body rounded mx-2 mb-3 card-width"
            style={{ zIndex: 100 }}
          >
            <span className="mid btn-primary btn-sm color-git ">
              MOST POPULAR
            </span>

            <div>
              <h1 className="text-primary fw-bold">Essential</h1>
            </div>

            <div>
              <p className="">Our top-seller for"the average renter."</p>
            </div>
            <div className=" d-flex price align-self-center ">
              <span className="text-primary mt-3 fw-bold  me-1">$</span>
              <span className=" fw-bold text-primary money ">18</span>
              <div className=" d-flex flex-column  ">
                <span className="text-primary mt-3 fw-bold fs-4 adjust">
                  55
                </span>
                <span className="text-secondary adjust ">/mo</span>
              </div>
            </div>
            <div className="d-flex justify-content-center  align-items-center ">
              <div className="line"></div>
              <p className="text-secondary letter-spacing fw-bold">
                KEY FEATURES
              </p>
              <div className="line"></div>
            </div>
      <div className="mt-4">
            <div className="fetures fw-bold">
              <p className="texts">Everyday Belongings</p>
              <p className="prices">$20,000</p>
            </div>
            <div className="fetures fw-bold">
              <p className="texts">Portable Electronics</p>
              <p className="prices">$1,000</p>
            </div>
            <div className="fetures fw-bold">
              <p className="texts">Personal Liability</p>
              <p className="prices">$200,000</p>
            </div>
            </div>
          </div>
          <div className="card text-center p-3 card-width" id="sidecardR">
            <div>
              <h1 className="fw-bold text-secondary">Premium</h1>
            </div>
            <div>
              <p className=" text-secondary">
                The perfect plan for those with a few extra belongings.
              </p>
            </div>
            <div className=" d-flex price align-self-center ">
              <span className="text-secondary mt-3 fw-bold  me-1">$</span>
              <span className=" fw-bold text-secondary money ">33</span>
              <div className=" d-flex flex-column  ">
                <span className="text-secondary mt-3 fw-bold fs-4 adjust">
                  55
                </span>
                <span className="text-secondary adjust ">/mo</span>
              </div>
            </div>
            <div className="d-flex justify-content-center  align-items-center ">
              <div className="line"></div>
              <p className="text-secondary letter-spacing fw-bold">
                KEY FEATURES
              </p>
              <div className="line"></div>
            </div>
            <div className="mt-4">
              <div className="fetures fw-bold text-secondary">
                <p className="">Everyday Belongings</p>
                <p>$40,000</p>
              </div>
              <div className="fetures fw-bold text-secondary">
                <p>Portable Electronics</p>
                <p>$3,000</p>
              </div>
              <div className="fetures fw-bold text-secondary">
                <p>Personal Liability</p>
                <p>$300,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="plans">
          <div>
            <button
              className="btn btn-primary fs-4 fw-bold rounded-pill px-4 mt-1 px-5 py-3 shadow"
              onClick={setAnimation}
            >
              Choose Plan
            </button>
          </div>
        </div>
        <div className="last-txt">
          <p className="fw-lighter  mt-2">Continue to view or edit details.</p>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="hideC" id="secondPage">
        <div class="navbar ">
          <div>
            <a class="navbar-brand d-flex align-items-center" href="#">
              <img src="/rev.svg" className="rev-logo ms-3" alt="" />
              <p className="restart fs-5">Choose Base Plan</p>
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
        <div className="background d-flex justify-content-between">
          <div className="d-flex text-center flex-column align-items-center left-part animate__animated animate__fadeIn">
            <h1 className="fw-bold">
              Customize your
              <br />
              Jetty plan.
            </h1>
            <div className="d-flex  inputt">
              <div className="starts first fw-bold text-secondary ">
                <label htmlFor="#">Starts</label>
                <input type="date" className="input-date" />
              </div>
              <div className="starts second fw-bold text-secondary">
                <label htmlFor="#">Deductible</label>
                <input
                  className="input-date deduct "
                  placeholder="$500"
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center right-part animate__animated animate__fadeInLeft">
            <div className="right-card">
              <div className="card cards p-4 shadow rounded-5 ">
                <div>
                  <h1 className="text-primary fw-bold">Essential</h1>
                  <div>
                    <p className="">
                      212 South Broadway Street, Apt 23 <br />
                      New York, NY 10012
                    </p>
                  </div>
                  <div className="d-flex fw-bold justify-content-between ">
                    <p className="texts ">Start Date</p>
                    <p className="prices">Today</p>
                  </div>
                  <div className="d-flex fw-bold justify-content-between">
                    <p className="texts">Deductible</p>
                    <p className="prices">$500</p>
                  </div>
                  <div className="line-1"></div>
                  <div className="d-flex fw-bold justify-content-between mt-3">
                    <p className="texts">Household Belongings</p>
                    <p className="prices">$20,000</p>
                  </div>
                  <div className="d-flex fw-bold justify-content-between">
                    <p className="texts">Electronics Coverage</p>
                    <p className="prices">$2,000</p>
                  </div>
                  <div className="d-flex fw-bold justify-content-between">
                    <p className="texts">Valuables Coverage</p>
                    <p className="prices">----</p>
                  </div>
                  <div className="d-flex fw-bold justify-content-between">
                    <p className="texts">Liability</p>
                    <p className="prices">$200,000</p>
                  </div>
                  <div className="d-flex fw-bold justify-content-between">
                    <p className="texts">Loss of Use</p>
                    <p className="prices">$6,000</p>
                  </div>
                  <div className="d-flex fw-bold justify-content-between">
                    <p className="texts">Medical Payment</p>
                    <p className="prices">$1,000</p>
                  </div>
                  <div className="line-1"></div>
                  <div className="d-flex fw-bold justify-content-between mt-3">
                    <p className="texts">Landlord </p>
                    <p className="prices">----</p>
                  </div>
                  <div className="d-flex fw-bold justify-content-between">
                    <p className="texts">Other People </p>
                    <p className="prices">----</p>
                  </div>
                  <div className="plans"></div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary rounded-pill px-4 mt-3 d-flex pay-now mb-5 ">
              <div className=" d-flex price align-self-center ">
                <span className="text-white mt-3 fw-bold  me-1">$</span>
                <span className=" fw-bold text-white money ">18</span>
                <div className=" d-flex flex-column  ">
                  <span className="text-white mt-3 fw-bold fs-4 adjust">
                    55
                  </span>
                  <span className="text-white adjust ">/mo</span>
                </div>
              </div>
              <span className="align-self-center fw-bold ms-5 fs-2">
                Pay Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
