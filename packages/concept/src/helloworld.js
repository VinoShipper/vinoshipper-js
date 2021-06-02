'use strict';

class HelloWorld {
  constructor () {
    this.testString = 'Hello World!';
  }

  setTestString (inputString) {
    this.testString = inputString;
  }

  getTestString () {
    return this.testString;
  }
}

//Export class
module.exports = new HelloWorld();
