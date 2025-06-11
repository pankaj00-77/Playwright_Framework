const { expect } = require('@playwright/test');

class BasePage {
  constructor(page) {
    this.page = page;
    this.expect = expect; // now every subclass can use `this.expect`
  }
}

module.exports = { BasePage };
