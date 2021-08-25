import * as express from "express";
import {CustomerController} from "../controllers/customer.controller";
import {ICustomerController} from "../controllers/icustomer.controller";

const customers: ICustomerController = new CustomerController();
// customers = require('../controllers/customer.controller');
const router = express.Router();

router.get("/", customers.customerList);

// Create a new Customer
router.post("/", customers.create);

// Retrieve all Customer
router.get("/", customers.findAll);

// Retrieve a single Customer with id
router.get("/:id", customers.findOne);

// Update a Customer with id
router.put("/:id", customers.update);

// Delete a Customer with id
router.delete("/:id", customers.delete);

// Create a new Customer
router.delete("/", customers.deleteAll);

module.exports = router;
