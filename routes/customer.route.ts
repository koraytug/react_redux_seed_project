import * as express from "express";
import CustomerController from "../controllers/customer.controller";
import {ICustomerController} from "../controllers/icustomer.controller";

export default class CustomerRouter {
    public customerRouter = express.Router();
    public customers: ICustomerController = new CustomerController();

    constructor() {
        this.customerRouter.get("/getall_customers", this.customers.getAllCustomers);
        this.customerRouter.post("/", this.customers.create);
    }

    // public create(req: Request, res: Response) {
    //     // const customerRouter = express.Router();
    //     // this.customers.update(req, res);
    //     this.customerRouter.post("/", this.customers.create(req, res));
    // }

    // public update(req: Request, res: Response) {
    //     this.customerRouter.put("/:id", this.customers.update(req, res));
    // }


    // // public customerList(req: Request, res: Response) {
    // //     this.customerRouter.put("/", this.customers.customerList(req, res));
    // // }

    // public getAllCustomers() {
    //     const customerRouter = express.Router();
    //     const customers: ICustomerController = new CustomerController();

    //     return customerRouter.get("/", customers.getAllCustomers);
    // }

    // public findAll(req: Request, res: Response) {
    //     this.customerRouter.put("/", this.customers.findAll(req, res));
    // }

}

