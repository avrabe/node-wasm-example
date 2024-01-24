import { hello, $init } from './handler/hello.js';
await $init;
let result = hello.Hello.createWorld();
for (let i = 0; i < 1000000; i++) {
    console.log(`Hello  ${result.calls()}!`);
}
