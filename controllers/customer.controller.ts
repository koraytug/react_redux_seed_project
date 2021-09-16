import {MongoClient, ObjectId} from "mongodb";
import {ICustomerController} from "./icustomer.controller";
import dotenv from "dotenv";
import {Request, Response} from "express";

export default class CustomerController implements ICustomerController {
    private uri: string;
    private dbName: string;
    private collectionName: string;

    constructor() {
        dotenv.config();
        this.uri = process.env.uri || "";
        this.dbName = "TESTAPP";
        this.collectionName = "customers";
    }

    public async getAllCustomers(req: Request, res: Response) {
        MongoClient.connect((process.env.uri || ""), (err, client) => {
            if (err) throw err;

            const db = client.db("TESTAPP");
            db.collection("customers").find().toArray((err, result) => {
                if (err) throw err;
                console.log(result);
                res.status(201).send(result);

                client.close();
            });
        });
        // const client = new MongoClient((process.env.uri || ""), {useNewUrlParser: true});
        // try {
        //     await client.connect();
        //     const db = client.db(this.dbName);

        //     const items = await db.collection(this.collectionName).find();
        //     const itemArray = await items.toArray();
        //     res.status(200).send(itemArray).json(itemArray);
        // } catch (error) {
        //     res.status(500).send(error.message);
        //     // reject(error);
        // } finally {
        //     client.close();
        // }
    }

    // Create and Save a new Tutorial
    public async create(req: Request, res: Response) {
    // Validate request
        if (!req.body) {
            res.status(400).send({message: "Content can not be empty!"});
            return;
        }
        const client = new MongoClient((process.env.uri || ""));
        try {
            await client.connect();

            const db = client.db(this.dbName);
            const addedItem = await db.collection(this.collectionName).insertOne(req.body);

            res.status(200).send(addedItem);

            client.close();
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    // Retrieve all Customers from the database.
    public findAll() {
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
    public findOne() {
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
    public async update(req: Request, res: Response) {
        if (!req.body) {
            return res.status(400).send({
                message: "Data to update can not be empty!"
            });
        }

        const id = req.params.id;
        const client = new MongoClient((process.env.uri || ""));
        try {
            await client.connect();
            const db = client.db("TESTAPP");
            const updatedItem = await db
                .collection("customers")
                .findOneAndReplace({_id: ObjectId(id)}, req.body, {
                    returnOriginal: false
                });
            res.status(200).send(updatedItem.value);
            client.close();
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    // Delete a Customer with the specified id in the request
    public delete() {
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
    public deleteAll() {
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

