// import {ICustomer} from "../models/icustomer";
import {Request, Response} from "express";

export interface ICustomerController {
    customerList(req: Request, res: Response) ;
    create (req: Request, res: Response) ;
    findAll(req: Request, res: Response) ;
    findOne(req: Request, res: Response) ;
    update(req: Request, res: Response) ;
    deleteAll(req: Request, res: Response);
    delete (req: Request, res: Response);
}
