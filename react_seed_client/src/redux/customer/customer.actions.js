import CustomerDataService from '../../services/customer.services';
import CustomerActionTypes from './customer.types';

export const createCustomer = (name, surname) => async (dispatch) => {
  try {
    const res = await CustomerDataService.create({
      name: name,
      surname: surname,
    });

    dispatch({
      type: CustomerActionTypes.CREATE_CUSTOMER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveCustomers = () => async (dispatch) => {
  try {
    const res = await CustomerDataService.getAll();

    dispatch({
      type: CustomerActionTypes.RETRIEVE_CUSTOMERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateCustomer = (id, data) => async (dispatch) => {
  try {
    const res = await CustomerDataService.update(id, data);

    dispatch({
      type: CustomerActionTypes.UPDATE_CUSTOMER,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteCustomer = (id) => async (dispatch) => {
  try {
    await CustomerDataService.delete(id);

    dispatch({
      type: CustomerActionTypes.DELETE_CUSTOMER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllCustomers = () => async (dispatch) => {
  try {
    const res = await CustomerDataService.deleteAll();

    dispatch({
      type: CustomerActionTypes.DELETE_ALL_CUSTOMERS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findCustomersByName = (name) => async (dispatch) => {
  try {
    const res = await CustomerDataService.findByTitle(name);

    dispatch({
      type: CustomerActionTypes.RETRIEVE_CUSTOMERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
