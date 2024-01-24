import { hello } from './handler/hello';

function local_hello(name: string) {
    let result = hello.Hello.createWorld().execute();
    console.log(`Hello ${name} ${result}!`);
  }
  
  local_hello('World');
  