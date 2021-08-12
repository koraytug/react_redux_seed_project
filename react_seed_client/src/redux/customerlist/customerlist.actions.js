import CustomerListActionTypes from './customerlist.types';

export const searchCustomers = (customer) => ({
  type: CustomerListActionTypes.SEARCH_CUSTOMERS,
  payload: customer,
});

export const addCustomer = (item) => ({
  type: CustomerListActionTypes.ADD_CUSTOMERS,
  payload: item,
});
