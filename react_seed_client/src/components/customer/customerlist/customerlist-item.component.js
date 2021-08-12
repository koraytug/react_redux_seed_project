import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  Customer,
  CustomerIconContainer,
  CustomerName,
  CustomerSurname,
} from './customerlist-item.styles';
import customerIcon from './user_icon.png';

// import CustomButton from '../custom-button/custom-button.component';
// import { CartContext } from '../../providers/cart/cart.provider';

// import './collection-item.styles.scss';

const CustomerListItem = ({ customer, history, linkUrl, match }) => {
  const { name, surname } = customer;
  //   const { addItem } = useContext(CartContext);

  return (
    <Customer onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <CustomerIconContainer
        className="background-image"
        imageUrl={customerIcon}
      />
      <CustomerIconContainer>
        <CustomerName className="name">{name}</CustomerName>
        <CustomerSurname className="surname">{surname}</CustomerSurname>
      </CustomerIconContainer>
    </Customer>
  );
};

export default withRouter(CustomerListItem);
