import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="../images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                  resumeData.aboutme
               }
               </p>
               <a href="https://docs.google.com/document/d/1lx-KfKwqF0yeebxP5MGgV-tIi5GZhc6H9oGTDqjzy1I/edit?usp=sharing" target="_blank">
                    <h2>RESUME</h2>
                    </a>
                    <br/>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <a href="https://github.com/zpuckett" target="_blank">
                    <span>{resumeData.website}</span>
                    </a>
                    <br></br>
                    <a href="mailto:zpuckettdesign@gmail.com" target="_blank">
                    <span>{resumeData.email}</span>
                    </a>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}