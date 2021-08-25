// const data = require('../models/customer.data');
import {CustomerData} from "../models/customer.data";
import {ICustomerController} from "./icustomer.controller";
// const db = require('../models');
// const Customer = db.customers;
// exports.customerList = (req, res) => {
//   res.send('Hello this will return customer list');
// };
export class CustomerController implements ICustomerController {
    static customerList(arg0: string, customerList: any) {
        throw new Error("Method not implemented.");
    }
    public customerList(req, res) {
        console.log("req geldi");
        if (req.query.customername !== undefined && req.query.customername !== "") {
            const result = Object.values(CustomerData.customers.items).filter(customer =>
                customer.name.startsWith(req.query.customername)
            );
            res.send(result);
        } else {
            res.send(CustomerData);
        }
    }

    // Create and Save a new Tutorial
    public create(req, res) {
        // // Validate request
        // if (!req.body.name) {
        //     res.status(400).send({ message: 'Content can not be empty!' });
        //     return;
        // }

        // // Create a Customer
        // const customer = new Customer({
        //     name: req.body.name,
        //     surname: req.body.surname,
        // });

        // // Save Customer in the database
        // customer
        //     .save(customer)
        //     .then((data) => {
        //     res.send(data);
        //     })
        //     .catch((err) => {
        //     res.status(500).send({
        //         message:
        //         err.message || 'Some error occurred while creating the Customer.',
        //     });
        //     });
    }

    // Retrieve all Customers from the database.
    public findAll(req, res) {
    // const name = req.query.name;
    // var condition = name
    //     ? { name: { $regex: new RegExp(name), $options: 'i' } }
    //     : {};

    // Customer.find(condition)
    //     .then((data) => {
    //     res.send(data);
    //     })
    //     .catch((err) => {
    //     res.status(500).send({
    //         message:
    //         err.message || 'Some error occurred while retrieving customers.',
    //     });
    //     });
    }

    // Find a single Customer with an id
    public findOne(req, res) {
    // const id = req.params.id;

    // Customer.findById(id)
    //     .then((data) => {
    //     if (!data)
    //         res.status(404).send({ message: 'Not found Customer with id ' + id });
    //     else res.send(data);
    //     })
    //     .catch((err) => {
    //     res
    //         .status(500)
    //         .send({ message: 'Error retrieving Customer with id=' + id });
    //     });
    }

    // Update a Customer by the id in the request
    public update(req, res) {
    // if (!req.body) {
    //     return res.status(400).send({
    //     message: 'Data to update can not be empty!',
    //     });
    // }

        // const id = req.params.id;

    // Customer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    //     .then((data) => {
    //     if (!data) {
    //         res.status(404).send({
    //         message: `Cannot update Customer with id=${id}. Maybe Customer was not found!`,
    //         });
    //     } else res.send({ message: 'Customer was updated successfully.' });
    //     })
    //     .catch((err) => {
    //     res.status(500).send({
    //         message: 'Error updating Customer with id=' + id,
    //     });
    //     });
    }

    // Delete a Customer with the specified id in the request
    public delete(req, res) {
    // const id = req.params.id;

    // Customer.findByIdAndRemove(id)
    //     .then((data) => {
    //     if (!data) {
    //         res.status(404).send({
    //         message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`,
    //         });
    //     } else {
    //         res.send({
    //         message: 'Customer was deleted successfully!',
    //         });
    //     }
    //     })
    //     .catch((err) => {
    //     res.status(500).send({
    //         message: 'Could not delete Customer with id=' + id,
    //     });
    //     });
    }

    // Delete all Customers from the database.
    public deleteAll(req, res) {
    // Customer.deleteMany({})
    //     .then((data) => {
    //     res.send({
    //         message: `${data.deletedCount} Customers were deleted successfully!`,
    //     });
    //     })
    //     .catch((err) => {
    //     res.status(500).send({
    //         message:
    //         err.message || 'Some error occurred while removing all customers.',
    //     });
    //     });
    }


}
