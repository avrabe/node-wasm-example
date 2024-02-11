import { hello, $init } from './handler/hello.js';
import { injectable, inject } from 'inversify';


interface Logger {
  log(msg: string): void;
}

@injectable()
class ConsoleLogger implements Logger {
  public log(msg: string) {
    console.log(msg); 
  }
}

@injectable()
class ApiClient {
  private world;
  constructor(@inject(ConsoleLogger) private logger: Logger) {
    this.init();
    this.world = hello.Hello.createWorld();
  }
  async init() {
    await $init;
    
    // do something else
  }

  public makeApiCall() {
    this.logger.log(this.world.calls());
  }
}



// Set up container
import { Container } from 'inversify';

const container = new Container();
container.bind<Logger>('Logger').to(ConsoleLogger);
container.bind<ApiClient>(ApiClient).toSelf();

// Usage
const apiClient = container.get<ApiClient>(ApiClient);
apiClient.makeApiCall();

apiClient.makeApiCall();


 function local_hello(name: string) {
     let result = hello.Hello.createWorld();
     for (let i = 0; i < 1000000; i++) {
         console.log(`Hello  ${result.calls()}!`);
     }
   }
  
  
   local_hello('World');
  