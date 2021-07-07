import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Contact Me
              </p>
            </div>
          </div>
    
        </section>
        );
  }
}