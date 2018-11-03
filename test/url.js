/* globals describe it */
/* eslint no-unused-vars: "off" */

const should = require('chai').should();
const Redirect = require('../dist');

describe('Url', () => {
  it('Is a String', () => {
    Redirect.to('http://google.com').should.be.an('string');
  });
});
