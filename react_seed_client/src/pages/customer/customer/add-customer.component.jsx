import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCustomer } from '../../../redux/customer/customer.actions';
import {
  CustomerForm,
  CustomerFormItem,
  FormLabelItem,
  FormInputItem,
  SaveButton,
  CustomerFormColumn,
  BirthYear,
  BirthMonth,
  BirthDay,
  CustomerFormButtonRow,
  CheckBoxItem,
  CancelButton,
} from './add-customer.styles';

class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
    this.onChangeBirthMonth = this.onChangeBirthMonth.bind(this);
    this.onChangeBirthYear = this.onChangeBirthYear.bind(this);
    this.onChangeBirthReminder = this.onChangeBirthReminder.bind(this);

    this.saveCustomer = this.saveCustomer.bind(this);
    // this.newTutorial = this.newCustomer.bind(this);

    this.state = {
      id: null,
      name: '',
      surname: '',
      phone: '',
      birthdate: '',
      birthmonth: '',
      birthyear: '',
      birthreminder: '',
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
  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  onChangeBirthDate(e) {
    this.setState({
      birthdate: e.target.value,
    });
  }
  onChangeBirthMonth(e) {
    this.setState({
      birthmonth: e.target.value,
    });
  }
  onChangeBirthYear(e) {
    this.setState({
      birthyear: e.target.value,
    });
  }
  onChangeBirthReminder(e) {
    this.setState({
      birthreminder: e.target.value,
    });
  }

  saveCustomer() {
    const {
      id,
      name,
      surname,
      phone,
      birthdate,
      birthmonth,
      birthyear,
      birthreminder,
    } = this.state;

    this.props
      .createCustomer({
        id,
        name,
        surname,
        phone,
        birthdate,
        birthmonth,
        birthyear,
        birthreminder,
      })
      .then((data) => {

        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  

  render() {
    return (
      <CustomerForm>
        <CustomerFormColumn>
          <CustomerFormItem>
            <FormLabelItem htmlFor="name">Name</FormLabelItem>
            <FormInputItem
              type="text"
              className="form-control"
              id="name"
              required
              value={this.state.name}
              onChange={this.onChangeName}
              name="name"
            />
          </CustomerFormItem>
          <CustomerFormItem>
            <FormLabelItem htmlFor="surname">Surname</FormLabelItem>
            <FormInputItem
              type="text"
              id="surname"
              required
              value={this.state.surname}
              onChange={this.onChangeSurname}
              name="surname"
            />
          </CustomerFormItem>
        </CustomerFormColumn>
        <CustomerFormColumn>
          <CustomerFormItem>
            <FormLabelItem htmlFor="phone">Phone Number</FormLabelItem>
            <FormInputItem
              type="text"
              className="form-control"
              id="phone"
              required
              value={this.state.phone}
              onChange={this.onChangePhone}
              name="phone"
            />
          </CustomerFormItem>
          <CustomerFormItem>
            <FormLabelItem htmlFor="surname">Birth Date</FormLabelItem>
            <BirthDay
              type="number"
              id="birthdate"
              required
              maxLength="2"
              value={this.state.birthdate}
              name="birthdate"
              placeholder="Day"
              onChange={this.onChangeBirthDate}
            />
            /
            <BirthMonth
              type="number"
              id="birthMonth"
              required
              maxLength="2"
              value={this.state.birthmonth}
              name="birthmonth"
              onChange={this.onChangeBirthMonth}
              placeholder="Month"
            />
            /
            <BirthYear
              type="number"
              id="birthyear"
              required
              maxLength="4"
              value={this.state.birthyear}
              name="birthyear"
              onChange={this.onChangeBirthYear}
              placeholder="Year"
            />
          </CustomerFormItem>
        </CustomerFormColumn>
        <CustomerFormColumn>
          <CustomerFormItem>
            <FormLabelItem htmlFor="birthreminder">
              Birth Day Reminder
            </FormLabelItem>
            <CheckBoxItem
              id="birthreminder"
              name="birthreminder"
              type="checkbox"
              value={this.state.birthreminder}
              onChange={this.onChangeBirthReminder}
              defaultChecked={false}
            />
          </CustomerFormItem>
        </CustomerFormColumn>
        <CustomerFormButtonRow>
          <SaveButton onClick={this.saveCustomer}>Save</SaveButton>
          <CancelButton>Cancel</CancelButton>
        </CustomerFormButtonRow>
      </CustomerForm>
    );
  }
}

// const mapStateToProps = (state) => ({
//   id: state.id,
//   name: state.name,
//   surname: state.surname,
//   phone: state.phone,
//   birthdate: state.birthdate,
//   birthmonth: state.birthmonth,
//   birthyear: state.birthyear,
//   birthreminder: state.birthreminder,
// });

const mapDispatchToProps = (dispatch) => ({
  createCustomer: (customer) => dispatch(createCustomer(customer)),
});

export default connect(null, mapDispatchToProps)(AddCustomer);
