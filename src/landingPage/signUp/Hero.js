import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center m-5 p-4">
        <h1 className="mt-5 fs-1">
          Open a free demat & trading account online
        </h1>
        <p className="fs-5">
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </p>
      </div>
      <div className="row mt-5">
        <div className="col mt-4">
          <img
            src="../media/images/signup.png"
            alt="signup image"
            style={{ width: "80%", marginLeft: "80px" }}
          ></img>
        </div>
        <div className="col mt-4">
          <form action="/signup">
            <button
              className="p-2 btn btn-primary"
              style={{ width: "100%", margin: "0 auto" }}
            >
              Sign up for free
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
