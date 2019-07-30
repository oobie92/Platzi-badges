import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = { form: {
    firstname: '',
    lastname: '',
    position: '',
    email: '',
    twitter: ''
  } };

  handleChange = e => {
    this.setState({
      form : { 
        ...this.state.form,
        [e.target.name]: e.target.value 
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
              firstName={this.state.form.firstname}
              lastName={this.state.form.lastName} 
              twitter={this.state.form.twitter} 
              position={this.state.form.position} 
              email={this.state.form.email}
              avatar="" 
              />
            </div>

            <div className="col-6">
              <BadgeForm 
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}  

export default BadgeNew;