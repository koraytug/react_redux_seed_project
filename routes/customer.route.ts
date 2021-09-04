import * as express from "express";
import CustomerController from "../controllers/customer.controller";
import {ICustomerController} from "../controllers/icustomer.controller";
import {Request, Response} from "express";

export default class CustomerRouter {

    public customerRouter = express.Router();
    public customers: ICustomerController = new CustomerController();
    constructor() {
        this.intializeRoutes();
    }
    public intializeRoutes() {
        // this.customerRouter.get("/", this.customers.customerList);

        // // Create a new Customer
        // this.customerRouter.post("/", this.customers.create);

        // Retrieve all Customer
        this.customerRouter.get("/", this.customers.findAll);

        // Retrieve a single Customer with id
        this.customerRouter.get("/:id", this.customers.findOne);

        // Update a Customer with id
        // this.customerRouter.put("/:id", this.customers.update);

        // Delete a Customer with id
        this.customerRouter.delete("/:id", this.customers.delete);

        // Create a new Customer
        this.customerRouter.delete("/", this.customers.deleteAll);
    }

    public create(req: Request, res: Response) {
        // this.customers.update(req, res);
        this.customerRouter.post("/", this.customers.create(req, res));
    }

    public update(req: Request, res: Response) {
        this.customerRouter.put("/:id", this.customers.update(req, res));
    }


    public customerList(req: Request, res: Response) {
        this.customerRouter.put("/", this.customers.customerList(req, res));
    }

    public findAll(req: Request, res: Response) {
        this.customerRouter.put("/", this.customers.findAll(req, res));
    }

}


// const customers: ICustomerController = new CustomerController();
// // customers = require('../controllers/customer.controller');
// export const customerRouter = express.Router();

// customerRouter.get("/", customers.customerList);

// // Create a new Customer
// customerRouter.post("/", customers.create);

// // Retrieve all Customer
// customerRouter.get("/", customers.findAll);

// // Retrieve a single Customer with id
// customerRouter.get("/:id", customers.findOne);

// // Update a Customer with id
// customerRouter.put("/:id", customers.update);

// // Delete a Customer with id
// customerRouter.delete("/:id", customers.delete);

// // Create a new Customer
// customerRouter.delete("/", customers.deleteAll);


