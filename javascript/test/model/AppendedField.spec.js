/**
 * Trulioo_identity_verification
 * To run tests transactions on our trial endpoint in postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TruliooIdentityVerification);
  }
}(this, function(expect, TruliooIdentityVerification) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TruliooIdentityVerification.AppendedField();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AppendedField', function() {
    it('should create an instance of AppendedField', function() {
      // uncomment below and update the code to test AppendedField
      //var instane = new TruliooIdentityVerification.AppendedField();
      //expect(instance).to.be.a(TruliooIdentityVerification.AppendedField);
    });

    it('should have the property fieldName (base name: "FieldName")', function() {
      // uncomment below and update the code to test the property fieldName
      //var instane = new TruliooIdentityVerification.AppendedField();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "Data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new TruliooIdentityVerification.AppendedField();
      //expect(instance).to.be();
    });

  });

}));
