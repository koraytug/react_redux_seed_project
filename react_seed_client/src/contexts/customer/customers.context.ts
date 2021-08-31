import {createContext} from "react";

import CUSTOMER_DATA from "./customer.data";

const CustomerContext = createContext(CUSTOMER_DATA);

export default CustomerContext;
