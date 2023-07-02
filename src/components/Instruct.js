import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import job from "./img/job.png";
import search from "./img/search.png";
import job1 from "./img/job1.png";
import arrow from "./img/arrow.png";

const Instruct = () => {
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();

    {
      navigate("/Login");
    }
  };
  const registerUser = async (e) => {
    e.preventDefault();

    {
      navigate("/Game");
    }
  };

  return (
    <>
      <div className="container">
        <div className="design">
          <p data-text="HIRING">HIRING</p>
          <div className="heading" style={{ marginTop: "-6%" }}>
            <h2>JOIN </h2>
            <p
              style={{
                marginTop: "-3%",
                marginRight: "6%",
                color: "#001440",
                alignItems: "end",
                textAlign: "end",
                fontSize: "5rem",
              }}
            >
              NOW
            </p>
            <h5>I/O</h5>

            <h5>UI/UX</h5>
            <h5>DEV</h5>
          </div>
          <div className="play" style={{ marginTop: "-28%" }}>
            <button
              style={{ fontSize: 28 }}
              type="button"
              class="btn btn-primary"
              onClick={loginUser}
            >
              Login/Register{" "}
            </button>
            
            <button
              style={{ fontSize: 28, marginTop: "9%" }}
              type="button"
              class="btn btn-primary"
              onClick={registerUser}
            >
            
              Job Search{" "}
            </button>
            
          </div>
          
        </div>
        
        <div className="signup-image" style={{ marginTop: "-6%" }}>
          <figure>
            <img src={job} alt="signup" />
          </figure>
        </div>
        <div className="job" style={{ marginTop:"-22%"}}>
          <figure>
            <img src={job1} alt="signup" />
          </figure>
        </div>
        
        <div className="search" style={{ marginTop: "-6%", alignItems:"end" }}>
          <figure>
            <img src={search} alt="signup" />
          </figure>
        </div>
        <div className="arrow" style={{ marginTop: "-60%", alignItems:"end" }}>
          <figure>
            <img src={arrow} alt="signup" />
          </figure>
        </div>
        <div className="arrow" style={{ marginTop: "-60%", alignItems:"end" }}>
          <figure>
            <img src={arrow} alt="signup" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Instruct;
