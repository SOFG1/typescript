import { test, utility } from "test-module"; // This is a declared module
utility(test);

declare function upload(params: string): string; // We declared a function which is not existing here
upload("123"); // This is a declared variable

declare const API_URL: string; // We declared a variable which is not existing here
console.log(API_URL);
