import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import CustomerContext from '../../../contexts/customer/customers.context';
import CustomerListItem from '../../../components/customer/customerlist/customerlist-item.component';

import { selectCustomerListItems } from '../../../redux/customerlist/customerlist.selectors';
import { addCustomer } from '../../../redux/customerlist/customerlist.actions';

// import './collection-preview.styles.scss';

const CustomerList = ({ customerItems, match }) => {
  const [customers, setUser] = useState(Array.from(customerItems));
  const [searchQuery, setSearchQuery] = useState('');

  let textInput = React.createRef();
  const [nameParam, setNameParam] = useState('');

  useEffect(() => {
    const fetchFunc = async () => {
      if (searchQuery !== '') {
        const response = selectCustomerListItems(searchQuery);
        setUser(response);
      } else {
        setUser(customerItems.items);
      }
      if (nameParam !== '') {
        const response = selectCustomerListItems(nameParam);
        setUser(response);
      } else {
        setUser(customerItems.items);
      }
    };

    fetchFunc();
  }, [searchQuery, nameParam, customers, customerItems.items]);

  return (
    <div className="collection-preview">
      <h1 className="title"> {'title'}</h1>
      <div>
        search customer from name:{' '}
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        ></input>
      </div>
      <div>
        search customer from name: <input type="text" ref={textInput}></input>
        <button onClick={() => setNameParam(textInput.current.value)}>
          Search
        </button>
      </div>

      <div>Customer List</div>
      <div className="preview">
        {customers.map((item) => (
          <CustomerListItem key={item.id} customer={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  customerItems: selectCustomerListItems(ownProps.match.params.customerName)(
    state
  ),
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addCustomer(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
