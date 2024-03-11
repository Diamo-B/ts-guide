//normal import
import { greet2 } from "./greeterModule";
console.log(greet2("person1"));

//default import
import greet from "./greeterModule";
console.log(greet("person2"));