import React from 'react';


class BadgeForm extends React.Component {

  handleClick = e => {
    console.log("button was clicked");
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="firstname" value={this.props.formValues.firstname} />
            <label htmlFor="">Last Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="lastname" value={this.props.formValues.lastname} />
            <label htmlFor="">email</label>
            <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email} />
            <label htmlFor="">Job title</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="position" value={this.props.formValues.position} />
            <label htmlFor="">Twitter</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter} />

            <button onClick={this.handleClick} className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>


    )
  }
}  

export default BadgeForm;