import CustomerActionTypes from './customer.types';

const initialState = [];

function customerReducer(customers = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CustomerActionTypes.CREATE_CUSTOMER:
      return [...customers, payload];

    case CustomerActionTypes.RETRIEVE_CUSTOMERS:
      return payload;

    case CustomerActionTypes.UPDATE_CUSTOMER:
      return customers.map((customer) => {
        if (customer.id === payload.id) {
          return {
            ...customer,
            ...payload,
          };
        } else {
          return customer;
        }
      });

    case CustomerActionTypes.DELETE_CUSTOMER:
      return customers.filter(({ id }) => id !== payload.id);

    case CustomerActionTypes.DELETE_ALL_CUSTOMERS:
      return [];

    default:
      return customers;
  }
}

export default customerReducer;
