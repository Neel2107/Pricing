import React from "react";

export const CheckoutPage = () => {
  return (
    <div>
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
      <div className="background d-flex justify-content-between  for-resp ">
        <div className="d-flex text-center flex-column align-items-center left-part for-resp ">
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

        <div className="d-flex flex-column align-items-center justify-content-center right-part ">
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
                <span className="text-white mt-3 fw-bold fs-4 adjust">55</span>
                <span className="text-white adjust ">/mo</span>
              </div>
            </div>
            <span className="align-self-center fw-bold ms-5 fs-2">Pay Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
