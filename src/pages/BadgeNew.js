import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/logo.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge firstName="Diego" lastName="Mendez" twitter="diegomarmcfly" position="DevOps Engineer" avatar="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}  

export default BadgeNew;