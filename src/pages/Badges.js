import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
  state = {
    data: [
      {
        "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        "firstName": "Freda",
        "lastName": "Grady",
        "email": "Leann_Berge@gmail.com",
        "jobTitle": "Legacy Brand Director",
        "twitter": "FredaGrady22221-7573",
        "avatarUrl": "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
      },
      {
        "id": "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        "firstName": "Major",
        "lastName": "Rodriguez",
        "email": "Ilene66@hotmail.com",
        "jobTitle": "Human Research Architect",
        "twitter": "MajorRodriguez61545",
        "avatarUrl": "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
      },
      {
        "id": "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        "firstName": "Daphney",
        "lastName": "Torphy",
        "email": "Ron61@hotmail.com",
        "jobTitle": "National Markets Officer",
        "twitter": "DaphneyTorphy96105",
        "avatarUrl": "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
      },
      {
        "id": "a9748581-dfdc-4a78-930d-5205a2ccef48",
        "firstName": "Tatyana",
        "lastName": "Von",
        "email": "Herminio.Schmeler@hotmail.com",
        "jobTitle": "Central Branding Representative",
        "twitter": "TatyanaVon35871-3686",
        "avatarUrl": "https://www.gravatar.com/avatar/98c382edd93414c1649b9db866000f97?d=identicon"
      },
      {
        "id": "1921a734-cc05-4f71-a677-ffe38dda6958",
        "firstName": "Maude",
        "lastName": "Effertz",
        "email": "Dan_Weimann0@yahoo.com",
        "jobTitle": "Product Solutions Analyst",
        "twitter": "MaudeEffertz73114",
        "avatarUrl": "https://www.gravatar.com/avatar/01d0de92ec9ca4fdfbb99edf6a1abfea?d=identicon"
      },
      {
        "id": "3629db36-14f9-4f24-b139-200f3a1b9af7",
        "firstName": "Breanna",
        "lastName": "Runolfsdottir",
        "email": "Laurianne.Lynch@gmail.com",
        "jobTitle": "Lead Marketing Director",
        "twitter": "BreannaRunolfsdottir70705-1477",
        "avatarUrl": "https://www.gravatar.com/avatar/684697e194c66d338c5ee91d030121cc?d=identicon"
      }
    ]
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>  
        </div>
      </div>
    )
  }
}

export default Badges;