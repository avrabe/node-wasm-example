import { hello, $init } from './handler/hello.js';
await $init;
function local_hello(name: string) {
    let result = hello.Hello.createWorld().calls();
    console.log(`Hello ${name} ${result}!`);
  }
  
  local_hello('World');
  