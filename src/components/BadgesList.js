import React from 'react';

import './styles/BadgesList.css';

class BadgesList extends React.Component {
  render(){
    return(
    <div className="BadgesList">
      <ul className="list-unstyled" >
      {this.props.badges.map((badge) => {
        return (
          <li key={badge.id} className="BadgesListItem">
            <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="Avatar" />
            <h4 className="Badge__name">{badge.firstName} {badge.lastName}</h4>
            <p className="Badge__name">{badge.twitter}</p>
            <p className="Badge__name">{badge.jobTitle}</p>
          </li>
        )
      })}
      </ul>
    </div>
    )
  }
}

export default BadgesList;