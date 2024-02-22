import 'reflect-metadata';
import { hello, $init } from './handler/hello.js';
import { injectable, inject } from 'inversify';

interface Logger {
  log(msg: string): void;
}

const SERVICE_IDENTIFIER = {
  LOGGER: Symbol.for("Logger"),
};

@injectable()
class ConsoleLogger implements Logger {
  public log(msg: string) {
    console.log(msg);
  }
}

@injectable()
class ApiClient {
  //private world;
  constructor(@inject(SERVICE_IDENTIFIER.LOGGER) private logger: Logger) {
    //this.world = instantiate(getCoreModule);
    //this.world = hello.Hello.createWorld();
  }

  public async makeApiCall() {
    await $init;
    let world = hello.Hello.createWorld();

    //let hh = this.world.createWorld();
    this.logger.log(world.calls());
  }
}


// Set up container
import { Container } from 'inversify';

const container = new Container();
container.bind<Logger>(SERVICE_IDENTIFIER.LOGGER).to(ConsoleLogger);
container.bind<ApiClient>(ApiClient).toSelf();

// Usage
const apiClient = container.get<ApiClient>(ApiClient);

for (let i = 0; i < 10; i++) {
  apiClient.makeApiCall();
}


