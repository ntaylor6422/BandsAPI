import { Router, Request, Response, NextFunction } from 'express';
import _ from 'lodash';
import BandManager from './manager';
import BaseController from '../common/controller';

class BandController extends BaseController {
  public path: string = '/users';
  public router: Router;

  protected manager: BandManager;

  constructor() {
    super();
    this.router = this.createRouter();
    this.manager = new BandManager();
  }

  /**
   * Using a factory method here
   */
  protected createRouter(): Router {
    const router = Router();

    router.get('/:bandId', this.get);
    router.post('/', this.post);
    router.patch('/:userId', this.patch);
    router.delete('/:userId', this.delete);

    return router;
  }

  protected get = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { userId } = req.params;
      const user = await this.manager.getUser(userId);
      if (!user) {
        res.status(404).send({ error: 'user not found' });
        return;
      }

      res.json(_.pick(user, ['id', 'username', 'displayName']));
    } catch (err) {
      // Delegate error handling to Express
      // with our custom error handler in
      // `src/middleware/errorHandler.ts`
      next(err);
    }
  };

  /**
   * HTTP POST request handler
   */
  protected post = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userDetails = req.body;
      const user = await this.manager.createUser(userDetails);

      res.status(201).json(_.pick(user, ['id', 'username', 'displayName']));
    } catch (err) {
      next(err);
    }
  };

  /**
   * HTTP PATCH request handler
   */
  protected patch = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { userId } = req.params;
      const newUserDetails = req.body;
      const updatedUser = await this.manager.updateUser(userId, newUserDetails);

      res.json(_.pick(updatedUser, ['id', 'username', 'displayName']));
    } catch (err) {
      next(err);
    }
  };

  /**
   * HTTP DELETE request handler
   */
  protected delete = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { userId } = req.params;

    try {
      await this.manager.removeUser(userId);
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  };
}

export default BandController;
