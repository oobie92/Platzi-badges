import React from 'react';


class BadgeForm extends React.Component {
  handleChandle = e => {
    console.log({ 
      name: e.target.name,
      value: e.target.value 
    });
  }

  handleClick = e => {
    console.log("button was clicked");
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("form submit")
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input onChange={this.handleChandle} className="form-control" type="text" name="firstname" />

            <button onClick={this.handleClick} className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>


    )
  }
}  

export default BadgeForm;