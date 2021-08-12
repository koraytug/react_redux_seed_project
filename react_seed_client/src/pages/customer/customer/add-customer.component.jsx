import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCustomer } from '../../../redux/customer/customer.actions';

class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeSurname.bind(this);
    this.saveTutorial = this.saveCustomer.bind(this);
    this.newTutorial = this.newCustomer.bind(this);

    this.state = {
      id: null,
      name: '',
      surname: '',
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeSurname(e) {
    this.setState({
      surname: e.target.value,
    });
  }

  saveCustomer() {
    const { name, surname } = this.state;

    this.props
      .createTutorial(name, surname)
      .then((data) => {
        this.setState({
          id: data.id,
          name: data.name,
          surname: data.surname,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newCustomer() {
    this.setState({
      id: null,
      name: '',
      surname: '',
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.id !== null ? (
          <div>
            <h4>You saved successfully!</h4>
            <button className="btn btn-success" onClick={this.newCustomer}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="naem"
              />
            </div>

            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                required
                value={this.state.surname}
                onChange={this.onChangeSurname}
                name="surname"
              />
            </div>

            <button onClick={this.saveCustomer} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { createCustomer })(AddCustomer);
