import axios from 'axios';
// import { response } from 'express';

export const getCustomerList = (customer2) => {
  axios({
    url: 'http://localhost:4400/customerList',
    method: 'get',
    data: {
      customername: customer2,
    },
  })
    .then((response) => {
      console.log('in the then');
      Promise.resolve(response);
    })
    .catch((error) => {
      throw error;
    });
};

 
