import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-5 text-center">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>

        <div className="col">
          <p className="p-5 mt-2">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="p-5 ">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India. Over 1+ Crore clients
            place millions of orders every day through our powerful ecosystem of
            investment platforms, contributing over 15% of all Indian retail
            trading volumes.
          </p>
        </div>
        <div className="col">
          <p className="p-5 mt-2">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p className="p-5 mt-2">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>

      <div className="row">
        <h1 className="text-center">People</h1>
        <div className="col mt-5">
          <img src="../media/images/abhi.jpeg" className="rounded-circle"></img>
        </div>
        <div className="col fs-4 m-5 " style={{textAlign:"justify" }}>
          Hello, I'm <b>Abhishek Verma.</b> A passionate technologist with a keen
          interest in exploring the ever-evolving world of technology. With a
          background in cpmuter science field, I specialize in harnessing the
          power of innovation to create solutions that drive efficiency and
          transformation. Whether it's coding, system architecture, or
          problem-solving, I thrive on pushing boundaries to deliver exceptional
          results. Currently, I am focused on <b>full-stack development</b>. I’m
          always seeking new challenges that allow me to learn, adapt, and
          contribute meaningfully to the tech community.
        </div>
      </div>
    </div>
  );
}

export default Hero;
