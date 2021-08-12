import React from 'react';

// import CustomButton from '../custom-button/custom-button.component';
// import { CartContext } from '../../providers/cart/cart.provider';

// import './collection-item.styles.scss';

const CustomerListItem = ({ customer }) => { 
  const { name, surname } = customer;
  //   const { addItem } = useContext(CartContext);

  return (
    <div className="collection-item">
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="surname">{surname}</span>
      </div>
    </div>
  );
};

export default CustomerListItem;
