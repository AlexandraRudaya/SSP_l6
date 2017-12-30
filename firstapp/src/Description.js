import React, { Component } from 'react';
import './Description.css';
class Description extends Component {
    render() {
      const fullName = this.props.fullName;
      const username = this.props.username;
      const location = this.props.location;
      const email = this.props.email;

      return (
        <div className="Description">

          <div className="Author">
            <h3> {fullName} </h3>
          </div>

          <div className="Login">
            <p> {username} </p>
          </div>

          <div className="Info">
            <p> Учусь в БрГТУ, на специальности ИИ. 4 курс.Скоро конец
            <i class="fa fa-graduation-cap" aria-hidden="true"></i> Где работать??</p>
            <hr></hr>
          </div>

          <div className="Contacts">
            <p><i class="fa fa-map-marker" aria-hidden="true"></i> {location} </p>
            <p><i class="fa fa-envelope" aria-hidden="true"></i> {email} </p>
          </div>
       
        </div>
      );
    }
  }
  
  export default Description;