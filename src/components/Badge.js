import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render(){
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Conference's logo" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1 >{this.props.firstName}<br /> {this.props.lastName}</h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.position}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">
          #PlatziConf
        </div>  
      </div>
    )
  }
}

export default Badge;