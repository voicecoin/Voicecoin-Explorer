import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canEdit: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setEdit = this.setEdit.bind(this);
  }

  componentWillMount() {
    this.setState({info: this.props.info});
  }

  handleChange(e) {
    const info = this.state.info;
    info[e.target.id] = e.target.value;
    this.setState({info});
  }

  handleLocationChange(e) {
    const location = this.state.info.location;
    location[e.target.id] = e.target.value;
    this.setState({location});
  }

  handleNameChange(e) {
    const fullName = this.state.info.fullName;
    fullName[e.target.id] = e.target.value;
    this.setState({fullName});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({canEdit: false});
    this.props.updateUserInfo(this.state.info);
    return (
      <Redirect to="/profile" />
    );
  }

  setEdit(e) {
    e.preventDefault();
    const canEdit = !this.state.canEdit;
    this.setState({canEdit});
  }

  render() {
    let email = this.state.info.email || 'Email Address';
    let firstName = this.state.info.fullName.firstName || 'First Name';
    let lastName = this.state.info.fullName.lastName || 'Last Name';
    let city = this.state.info.location.city || 'City';
    let phone = this.state.info.phone || 'Phone Number';
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h2>Edit Your Information</h2>
        </div>

        <form>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" readOnly={!this.state.canEdit} onChange={this.handleNameChange} placeholder={firstName} value={this.state.info.fullName.firstName} />
            </div>
            <div className="form-group col">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" readOnly={!this.state.canEdit} onChange={this.handleNameChange} placeholder={lastName} value={this.state.info.fullName.lastName} />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" id="city" readOnly={!this.state.canEdit} onChange={this.handleLocationChange} placeholder={city} value={this.state.info.location.city} />
            </div>
            <div className="form-group col-6">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" className="form-control" id="phone" readOnly={!this.state.canEdit} onChange={this.handleChange} placeholder={phone} value={this.state.info.phone} />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="email">Email Address</label>
              <input type="email" className="form-control" id="email" readOnly={!this.state.canEdit} onChange={this.handleChange} placeholder={email} value={this.state.info.email} />
            </div>
            <div className="form-group col-6"></div>
          </div>
        </form>
        
        <div className="row justify-content-end">
          <div className="col-2">
            <button className="btn btn-dark" onClick={this.setEdit}>Edit</button>
          </div>
        </div>

        <div className="row justify-content-start">
          <div className="col-2">
            <button className="btn btn-light" onClick={this.handleSubmit}>
              <Link className="link" to="/profile">Save Changes</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
