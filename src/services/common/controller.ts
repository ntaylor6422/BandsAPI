import { Router, Request, Response, NextFunction } from 'express';
import { IManager } from './manager';

abstract class BaseController {
  public path: string;
  public router: Router;

  protected manager: IManager;

  protected abstract createRouter(): Router;
}

export default BaseController;
