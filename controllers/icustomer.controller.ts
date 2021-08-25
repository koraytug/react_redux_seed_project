export interface ICustomerController {
    customerList(req, res);
    create (req, res) ;
    findAll(req, res) ;
    findOne(req, res) ;
    update(req, res) ;
    deleteAll(req, res);
    delete  (req, res)
}