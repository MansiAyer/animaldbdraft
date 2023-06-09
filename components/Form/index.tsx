import { useState } from "react";

export default function FormCustom() {
  const [pillNum, setPills] = useState(1);

  function NavPillButtons({
    classOne,
    classTwo,
    classThree,
  }: {
    classOne: string;
    classTwo: string;
    classThree: string;
  }) {
    return (
      <div className="nav nav-pills d-flex justify-content-evenly p-3 border-bottom border-light">
        <div
          onClick={() => setPills(1)}
          className="btn badge rounded-pill text-bg-light"
        >
          <span className={classOne}>Stray details</span>
        </div>
        <span>&rarr;</span>

        <div
          onClick={() => setPills(2)}
          className="btn badge rounded-pill text-bg-light"
        >
          <span className={classTwo}>Feeder details</span>
        </div>
        <span>&rarr;</span>

        <div
          onClick={() => setPills(3)}
          className="btn badge rounded-pill text-bg-light"
        >
          <span className={classThree}>Pictures of stray</span>
        </div>
      </div>
    );
  }
  //end of nav pills


  function WhatGoesOut() {
    //display correct form part
    return (
      <div>
        <NavPillButtons
          classOne={pillNum == 1 ? "text-decoration-underline fst-italic" : ""}
          classTwo={pillNum == 2 ? "text-decoration-underline fst-italic" : ""}
          classThree={
            pillNum == 3 ? "text-decoration-underline fst-italic" : ""
          }
        />

        {pillNum == 1 ? (
          <StepFirst />
        ) : pillNum == 2 ? (
          <StepSecond />
        ) : (
          <StepThird />
        )}
      </div>
    );
    //end of if else
  } //end of whatgoesout
  

  return (
    <>
      <WhatGoesOut />
    </>);
}
//end of Form component




  function StepFirst() {
    return (
      <>
        <div className="card text-bg-light mb-3">
          <h5 className="card-header">Stray details</h5>
          <div className="card-body text-bg-secondary d-grid gap-3">
            <div className="row">
              <div className="col-auto">
                <label htmlFor="strayName" className="col-form-label">
                  Stray Name:{" "}
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="strayName"
                  className="form-control"
                  aria-labelledby="strayname"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-auto">
                <label htmlFor="strayAddr" className="col-form-label">
                  Stray Address:{" "}
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="strayAddr"
                  className="form-control"
                  aria-labelledby="strayaddress"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function StepSecond() {
    return (
      <>
        <div className="card text-bg-light mb-3">
          <h5 className="card-header">Feeder details</h5>
          <div className="card-body text-bg-secondary d-grid gap-3">
            <div className="row">
              <div className="col-auto">
                <label htmlFor="feederName" className="col-form-label">
                  Feeder Name:{" "}
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="feederName"
                  className="form-control"
                  aria-labelledby="feedername"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-auto">
                <label htmlFor="feederContact" className="col-form-label">
                  Feeder contact num:{" "}
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="feederContact"
                  className="form-control"
                  aria-labelledby="feedercontact"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function StepThird() {
    return (
      <>
        <div className="card text-bg-light mb-3">
          <h5 className="card-header">Pictures of stray</h5>
          <div className="card-body text-bg-secondary d-grid gap-3">
            <div className="row">
              <div className="col-auto">
                <label htmlFor="strayMedia" className="col-form-label">
                  Pictures of stray:{" "}
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="strayMedia"
                  className="form-control"
                  aria-labelledby="straymedia"
                  required
                />
              </div>
            </div>

            <details>
              <summary className="text-decoration-underline">
                {" "}
                add additional details expand section
              </summary>
              <p> stray species dropdown cat/dog/bird? </p>
              <p> stray age </p>
              <p>
                {" "}
                stray identification such as fur color, fur pattern, eye color,
                scars{" "}
              </p>
            </details>
          </div>
        </div>
      </>
    );
  }

