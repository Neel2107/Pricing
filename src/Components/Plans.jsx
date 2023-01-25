import React from "react";

export const Plans = () => {
  return (
    <div>
      <div className="main-text">
        <h1>Pick a base plan:</h1>
      </div>

      <div className="container c-row">
        <div className="card text-center p-3">
          <div>
            <h1 className="fw-bold text-secondary">Basic</h1>
          </div>

          <div>
            <p className="fw-bold text-secondary">A no-frills plan to meet most landlords' requirements.</p>
          </div>

          <div className="text-secondary">$12.55/mo</div>

          <div>
            <p className="text-secondary">KEY FEATURES</p>
          </div>

          <div className="fetures text-secondary">
            <p>Everyday Belongings</p>
            <p>$10,000</p>
          </div>
          <div className="fetures text-secondary">
            <p>Portable Electronics</p>
            <p>$1,000</p>
          </div>
          <div className="fetures text-secondary">
            <p>Personal Liability</p>
            <p>$100,000</p>
          </div>
        </div>
      
          
        <div className="card text-center p-3 shadow p-3 bg-body rounded mx-2 ">
        <span className="mid btn-primary btn-sm color-git">
            MOST POPULAR
          </span>

          <div>
            <h1 className="text-primary fw-bold">Essential</h1>
          </div>

          <div>
            <p className="fw-bold">Our top-seller for"the average renter."</p>
          </div>

          <div>$18.55/mo</div>

          <div>
            <p>KEY FEATURES</p>
          </div>

          <div className="fetures">
            <p>Everyday Belongings</p>
            <p>$20,000</p>
          </div>
          <div className="fetures">
            <p>Portable Electronics</p>
            <p>$1,000</p>
          </div>
          <div className="fetures">
            <p>Personal Liability</p>
            <p>$200,000</p>
          </div>
        </div>
        <div className="card text-center p-3">
          <div>
            <h1 className="fw-bold text-secondary">Premium</h1>
          </div>

          <div>
            <p className="fw-bold text-secondary">The perfect plan for those with a few extra belongings.</p>
          </div>

          <div className="text-secondary">$33.55/mo</div>

          <div>
            <p className="text-secondary">KEY FEATURES</p>
          </div>

          <div className="fetures text-secondary">
            <p>Everyday Belongings</p>
            <p>$40,000</p>
          </div>
          <div className="fetures text-secondary">
            <p>Portable Electronics</p>
            <p>$3,000</p>
          </div>
          <div className="fetures text-secondary">
            <p>Personal Liability</p>
            <p>$300,000</p>
          </div>
        </div>
      </div>
      <div className="plans">
        <div>
          <button className="btn btn-primary rounded-pill px-4 mt-3">
            Choose Plan
          </button>
        </div>
      </div>
      <div className="last-txt">
        <p className="fw-lighter mt-2">Continue to view or edit details.</p>
      </div>
    </div>
  );
};
