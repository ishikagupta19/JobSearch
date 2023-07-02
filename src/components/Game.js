import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"

const Game = () => {
  return (
    <div className='container'>
    <div class="row height d-flex justify-content-center align-items-center">

<div class="col-md-8">

  <div class="search">
  <BiSearchAlt2  className='searchbtn'/>

    <input type="text" class="form-control" placeholder="Explore your jobs here!"/> 
    <button class="btn btn-success">Search</button>
  </div>
  
</div>

</div>
    <div class="row" style={{paddingTop:"4%"}}>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title" style={{fontWeight:"900"}}>UI/UX DEVELOPER</h5>
        <p class="card-text" style={{fontWeight:"500"}}>Designing and developing user interfaces for web applications, mobile apps, or software products. Skilled in Figma, Adobe Photoshop</p>
        <a href="#" class="btn btn-outline-dark">APPLY</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title" style={{fontWeight:"900"}}>Software DEVELOPER</h5>
        <p class="card-text" style={{fontWeight:"500"}}>Designing, coding, and debugging software applications based on user requirements and specifications. Should have expertise in C/C++, Linux</p>
        <a href="#" class="btn btn-dark">APPLY</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
    <div class="card-body">
        <h5 class="card-title" style={{fontWeight:"900"}}>Frontend DEVELOPER</h5>
        <p class="card-text" style={{fontWeight:"500"}}>Collaborate with designers and backend developers to translate design mockups and wireframes into interactive web interfaces. Skilled in HTML5, CSS3, ReactJS, Javascript</p>
        <a href="#" class="btn btn-outline-dark">APPLY</a>
      </div>
    </div>
  </div>
</div>
 <div class="row" style={{paddingTop:"3%"}}>
 <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title" style={{fontWeight:"900"}}>Android DEVELOPER</h5>
        <p class="card-text" style={{fontWeight:"500"}}>Designing, coding, testing, and debugging Android applications based on user requirements and specifications.</p>
        <a href="#" class="btn btn-dark">APPLY</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
    <div class="card-body">
        <h5 class="card-title" style={{fontWeight:"900"}}>Backend ENGNINEER</h5>
        <p class="card-text" style={{fontWeight:"500"}}>Should have strong hands in handling databases, creating API, merging backend and frontend and knows MongoDB.</p>
        <a href="#" class="btn btn-outline-dark">APPLY</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title" style={{fontWeight:"900"}}>Full Stack DEVELOPER</h5>
        <p class="card-text" style={{fontWeight:"500"}}>Assisting in the design, development, and maintenance of web applications, both frontend and backend.</p>
        <a href="#" class="btn btn-dark">APPLY</a>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Game