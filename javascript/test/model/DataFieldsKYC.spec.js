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
    instance = new TruliooIdentityVerification.DataFieldsKYC();
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

  describe('DataFieldsKYC', function() {
    it('should create an instance of DataFieldsKYC', function() {
      // uncomment below and update the code to test DataFieldsKYC
      //var instane = new TruliooIdentityVerification.DataFieldsKYC();
      //expect(instance).to.be.a(TruliooIdentityVerification.DataFieldsKYC);
    });

    it('should have the property personInfo (base name: "PersonInfo")', function() {
      // uncomment below and update the code to test the property personInfo
      //var instane = new TruliooIdentityVerification.DataFieldsKYC();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "Location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new TruliooIdentityVerification.DataFieldsKYC();
      //expect(instance).to.be();
    });

    it('should have the property communication (base name: "Communication")', function() {
      // uncomment below and update the code to test the property communication
      //var instane = new TruliooIdentityVerification.DataFieldsKYC();
      //expect(instance).to.be();
    });

    it('should have the property driverLicence (base name: "DriverLicence")', function() {
      // uncomment below and update the code to test the property driverLicence
      //var instane = new TruliooIdentityVerification.DataFieldsKYC();
      //expect(instance).to.be();
    });

    it('should have the property nationalIds (base name: "NationalIds")', function() {
      // uncomment below and update the code to test the property nationalIds
      //var instane = new TruliooIdentityVerification.DataFieldsKYC();
      //expect(instance).to.be();
    });

    it('should have the property passport (base name: "Passport")', function() {
      // uncomment below and update the code to test the property passport
      //var instane = new TruliooIdentityVerification.DataFieldsKYC();
      //expect(instance).to.be();
    });

    it('should have the property countrySpecific (base name: "CountrySpecific")', function() {
      // uncomment below and update the code to test the property countrySpecific
      //var instane = new TruliooIdentityVerification.DataFieldsKYC();
      //expect(instance).to.be();
    });

  });

}));
