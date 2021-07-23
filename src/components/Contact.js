import React, { Component, useState } from 'react';
export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51767.875996257644!2d-86.94645403342555!3d35.81239654689714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88637f5ad8d51d67%3A0xe9091bfa65a0dd2d!2sThompson&#39;s%20Station%2C%20TN!5e0!3m2!1sen!2sus!4v1625628958304!5m2!1sen!2sus" 
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
            
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs align-center">
               
              </h2>
              <a className="leading-relaxed align-center">
                
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs align-center mt-4">
                
              </h2>
              <p className="leading-relaxed align-center"></p>
            </div>
          </div>
        </div>
      
          <h1 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h1>
          <p className="leading-relaxed mb-5">
            Zach Puckett<br/>
            zpuckettdesign@gmail.com<br/>
            615.430.3114
          </p>
          
      </div>
    </section>
  );
  }
}