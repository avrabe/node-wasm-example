import { hello, $init } from './handler/hello.js';
await $init;
function local_hello(name: string) {
    let result = hello.Hello.createWorld();
    for (let i = 0; i < 1000000; i++) {
        console.log(`Hello  ${result.calls()}!`);
    }
  }
  
  
  local_hello('World');
  