import CustomerListActionTypes from './customerlist.types';
// import { selectCustomerListItems } from './customerlist.selectors';

import CUSTOMER_DATA from './customer.data';

const INITIAL_STATE = {
  customers: CUSTOMER_DATA.items,
};

const customerListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CustomerListActionTypes.ADD_CUSTOMERS:
      return {
        ...state.items,
        ...action.payload,
      };
    case CustomerListActionTypes.SEARCH_CUSTOMERS:
      let customers = [];
      if (action.payload === '') {
        customers = INITIAL_STATE;
      } else {
        const result = INITIAL_STATE.customers.filter((customer) =>
          customer.name.startsWith(action.payload)
        );
        customers = {
          customers: result,
        };
      }

      return {
        ...customers,
      };
    default:
      return state;
  }
};

export default customerListReducer;
