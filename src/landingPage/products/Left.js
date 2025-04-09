import React from "react";

function Left({image , productName ,productDescription , tryDemo , learn ,google ,app}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-8 p-5">
          <img src={image}></img>
        </div>
        <div className="col-4 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="mt-5 fs-5">
            {productDescription}
          </p>
        
      
      <div className="row">
        <div className="col mt-3"><a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i> </a></div>
        <div className="col mt-3"><a href={learn} >Learn more <i class="fa-solid fa-arrow-right"></i> </a></div>
      </div>

      <div className="row mt-3">
        <div className="col">
            <a href={google}><img src="./media/images/googlePlayBadge.svg"></img></a>
        </div>
        <div className="col">
            <a href={app}><img src="./media/images/appStoreBadge.svg"></img></a>

        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Left;
