import express, { Application } from 'express';
import { Middleware, ErrorHandlingMiddleware } from './middleware/types';
import bodyParser from 'body-parser';

class App {
  public static readonly DEFAULT_PORT: number = 5000;

  public readonly app: Application;
  public readonly port: number;

  protected postStartHook: () => void;

  constructor({ port, middleware, services, errorHandlers }: AppConfig) {
    this.app = express();
    this.port = port || App.DEFAULT_PORT;

    this.registerMiddleware(middleware);
    this.registerServices(services);

    this.registerErrorHandlers(errorHandlers);

    this.postStartHook = () => {
      console.log(`App listening on localhost ${this.port}`);
    };
  }
  public start(): void {
    this.app.listen(this.port, this.postStartHook);
  }

  protected registerMiddleware(
    middleware: (Middleware | ErrorHandlingMiddleware)[]
  ): void {
    middleware.forEach((_middleware) => this.app.use(_middleware));
  }
  //! Remember to set a Base Controller
  protected registerServices(services: BaseController[]): void {
    services.forEach((_services) =>
      this.app.use(_service.path, _service.router)
    );
  }

  protected registerErrorHandlers(
    errorHandlers: ErrorHandlingMiddleware[]
  ): void {
    errorHandlers.forEach((_errorHandler) => this.app.use(errorHandlers));
  }
}

export function getDefaultApp(appSecret: string) {
  return new App({
    appSecret,
    port: 5000,
    services: [
      //! Insert Controllers
    ],
    middleware: [
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true }),

      loggerMiddleware,
    ],
    errorHandlers: [errorHandler],
    AuthManagerClass: AuthManager,
  });
}

export default App;
