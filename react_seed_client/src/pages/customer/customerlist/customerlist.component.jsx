import React from 'react';
import { connect } from 'react-redux';
import CustomerListItem from '../../../components/customer/customerlist/customerlist-item.component';
// import { selectCustomerListItems } from '../../../redux/customerlist/customerlist.selectors';
import { searchCustomers } from '../../../redux/customerlist/customerlist.actions';
let textInput = React.createRef();

class CustomerList extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     // this.searchCustomer = this.searchCustomer.bind(this);
  //   }
  //     componentDidMount() {

  //   }

  //   searchCustomer(customerName) {
  //     const s = searchCustomers(customerName);
  //     console.log(s);
  //     return s;
  //   }

  render() {
    console.log(this.props);
    let { customers } = this.props;
    return (
      <div className="collection-preview">
        <h1 className="title"> {'title'}</h1>
        <div>
          search customer from name: <input type="text" ref={textInput}></input>
          <button
            onClick={() => {
              this.props.searchCustomers(textInput.current.value);
              //    customers = this.searchCustomer(textInput.current.value);
            }}
          >
            Search
          </button>
        </div>

        <div>Customer List</div>
        <div className="preview">
          {customers?.map((item) => (
            <CustomerListItem key={item.id} customer={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customerList.customers,
});

const mapDispatchToProps = (dispatch) => ({
  searchCustomers: (customerName) => dispatch(searchCustomers(customerName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
