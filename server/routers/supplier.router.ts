import { Router } from 'express';
import { Request, Response, RequestHandler, } from 'express';
import { RequestHandlerParams, NextFunction } from 'express-serve-static-core';
import { BaseRouter } from './base/base.router';
import { CONST } from '../constants';
import { SupplierController } from '../controllers/index';

export class SupplierRouter extends BaseRouter {
    public router: Router = Router();
    public controller = new SupplierController();
    public resource: string;

    public constructor(){
        super();
        this.resource = CONST.ep.PRODUCTS;
    }
}