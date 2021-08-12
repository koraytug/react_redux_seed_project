import customerIcon from '../../pages/homepage/customer-icon.png';
import stockIcon from '../../pages/homepage/goods-icon-25.jpg';
import operationIcon from '../../pages/homepage/operation-icon.jpg';
import reportIcon from '../../pages/homepage/report-icon.png';

const INITIAL_STATE = {
  sections: [
    {
      title: 'Customers',
      imageUrl: customerIcon,
      size: 10,
      linkUrl: 'customer/customerlist',
    },
    {
      title: 'Stocks',
      imageUrl: stockIcon,
      size: 10,
      linkUrl: 'stock/stocklist',
    },
    {
      title: 'Operations',
      imageUrl: operationIcon,
      size: 10,
      linkUrl: 'operation/operationlist',
    },
    {
      title: 'Reports',
      imageUrl: reportIcon,
      size: 10,
      linkUrl: 'report/reportslist',
    },
  ],
};

const sectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sectionReducer;
