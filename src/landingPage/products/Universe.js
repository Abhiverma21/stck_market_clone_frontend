import React from "react";

function Universe() {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3">The Zerodha Universe</h1>
        <p className="text-center mt-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row p-5 text-center">
          <div className="col  ">
            <img
              src="./media/images/zerodhaFundhouse.png"
              style={{ width: "60%" }}
            ></img>
            <p
              className=" p-4"
              style={{ fontSize: "15px", textAlign: "start" }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col">
            <img
              src="./media/images/sensibullLogo.svg"
              style={{ width: "60%", marginTop: "" }}
            ></img>
            <p
              className="mt-3 p-4"
              style={{ fontSize: "15px", textAlign: "start" }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col">
            <img
              src="./media/images/goldenpiLogo.png"
              style={{ width: "40%" }}
            ></img>
            <p
              className="mt-2 p-4"
              style={{ fontSize: "15px", textAlign: "start" }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>
        <div className="row p-s text-center">
          <div className="col">
            <img
              src="./media/images/streaklogo.png"
              style={{ width: "40%" }}
            ></img>
            <p
              className="mt-2 p-4"
              style={{ fontSize: "15px", textAlign: "start" }}
            >
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col">
            <img
              src="./media/images/smallcaseLogo.png"
              style={{ width: "40%" }}
            ></img>
            <p
              className="mt-2 p-4"
              style={{ fontSize: "15px", textAlign: "start" }}
            >
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.{" "}
            </p>
          </div>
          <div className="col">
            <img
              src="./media/images/dittoLogo.png"
              style={{ width: "40%" , marginTop:"-20px" }}
            ></img>
            <p
              className="mt-2 p-4"
              style={{ fontSize: "15px", textAlign: "start" }}
            >
              Personalized advice on life and health insurance. No spam and no
              mis-selling.{" "}
            </p>
          </div>
        </div>
        <button className='p-2 btn btn-primary 'style={{width:"20%", marginLeft: "40%" , marginBottom:"10%"}}>Sign up for free</button>

      </div>
    </>
  );
}

export default Universe;
