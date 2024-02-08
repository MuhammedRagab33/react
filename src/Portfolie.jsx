import React from "react";
export default function Portfolie(){
    return(
<>
<section id="Portfolio">
  <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade show active" id="All" role="tabpanel" aria-labelledby="all-tab" tabIndex={0}>
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="itme position-relative overflow-hidden">
              <img src="img/1.jpg" className="w-100" alt />
              <div className="layer position-absolute d-flex justify-content-center align-items-center flex-column">
            </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="itme position-relative overflow-hidden">
              <img src="img/2.jpg" className="w-100" alt />
              <div className="layer position-absolute d-flex justify-content-center align-items-center flex-column">
            </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="itme position-relative overflow-hidden">
              <img src="img/3.jpg" className="w-100" alt />
              <div className="layer position-absolute d-flex justify-content-center align-items-center flex-column">
            </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="itme position-relative overflow-hidden">
              <img src="img/4.jpg" className="w-100" alt />
              <div className="layer position-absolute d-flex justify-content-center align-items-center flex-column">
            </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="itme position-relative overflow-hidden">
              <img src="img/5.jpg" className="w-100" alt />
              <div className="layer position-absolute d-flex justify-content-center align-items-center flex-column">
            </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="itme position-relative overflow-hidden">
              <img src="img/6.jpg" className="w-100" alt />
              <div className="layer position-absolute d-flex justify-content-center align-items-center flex-column">
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</section>
</>
)
}