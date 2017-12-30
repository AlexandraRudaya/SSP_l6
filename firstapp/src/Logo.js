import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {

  render() {
    const photo = this.props.photo;
    const fullName = this.props.fullName;
    const username = this.props.username;

    return (
      <div className="Header">
        <div className="Logotype">
         <img src={photo} alt="Девчуля-кисуля"></img>
        </div>
      </div>
    );
  }
}
  
export default Logo;